import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './../Main/Main.js';
import Tools from '../Tools/Tools.js';
import ToolScreen from './../ToolScreen/ToolScreen.js';
import NewToolScreen from './../NewToolScreen/NewToolScreen.js';
import Status from './../Status/Status.js';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import Profile from './../Profile/Profile.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import mainApi from '../../utils/MainApi.js';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute.js';
import * as auth from '../../utils/Auth.js';

function App() {

    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [tools, setTools] = React.useState([]);
    const [selectedTool, setSelectedTool] = React.useState(null);
    const [isToolScreenOpen, setToolScreenOpen] = React.useState(false);
    const [isNewToolScreenOpen, setNewToolScreenOpen] = React.useState(false);
    const [isToolInfoUpdated, setToolInfoUpdated] = React.useState(false);
    const [isNewToolAdded, setNewToolAdded] = React.useState(false)
    const [isToolInfoDeleted, setToolInfoDeleted] = React.useState(false)

    const navigate = useNavigate();

    function handleLogin() {
        setLoggedIn(true);
    }

    function handleToolClick(tool) {
        setSelectedTool(tool);
        setToolScreenOpen(true);
    }

    function handleNewToolClick() {
        setNewToolScreenOpen(true);
    }

    function closeAllPopups() {
        setToolScreenOpen(false);
        setNewToolScreenOpen(false)
        setToolInfoUpdated(false);
        setNewToolAdded(false);
        setToolInfoDeleted(false);
    }

    React.useEffect(() => {
        if (isLoggedIn) {
          mainApi.getUserInfo().then((data) => {
            setCurrentUser(data.data);
          })
            .catch((err) => {
              console.error(`Ошибка получения данных профиля: ${err}`);
            });
        }
    }, [isLoggedIn]);

    function checkToken() {
        auth.checkToken()
          .then((data) => {
            if (!data) {
              return;
            };
            setLoggedIn(true);
          })
          .catch((err) => {
            setLoggedIn(false);
            console.error(`Ошибка токена: ${err}`);
          });
    }
    
    React.useEffect(() => {
        checkToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        mainApi.getTools().then((tools) => {
          setTools(tools);
        })
          .catch((err) => {
            console.error(`Ошибка получения средств измерения: ${err}`);
          });
    }, [isToolScreenOpen, isNewToolScreenOpen]); 

    function logout() {
        auth.clearCookie()
          .then((res) => {
            setLoggedIn(false);
            localStorage.clear();
            navigate("/", { replace: true });
          })
          .catch((err) => {
            console.error(`Ошибка: ${err}`);
          });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='root'>
                <div className='page'>

                    <Routes>
                        <Route path="/" element={
                            <Main 
                                isLoggedIn={isLoggedIn}
                            />
                        } />

                        <Route path="/tools" element={
                            <ProtectedRoute element={
                                <Tools 
                                    isLoggedIn={isLoggedIn}
                                    tools={tools}
                                    setTools={setTools}
                                    onToolClick={handleToolClick}
                                    onNewToolAdd={handleNewToolClick}
                                />}
                            isLoggedIn={isLoggedIn} />
                        } />

                        <Route path="/status" element={
                            <Status
                                isLoggedIn={isLoggedIn}
                            />
                        } />

                        <Route path="/signup" element={
                            <Register 
                                onLogin={handleLogin}
                            />
                        } />

                        <Route path="/signin" element={
                            <Login 
                                onLogin={handleLogin}
                            />
                        } />

                        <Route path="/profile" element={
                            <ProtectedRoute element={
                                <Profile 
                                    isLoggedIn={isLoggedIn}
                                    onLogout={logout}
                                    setCurrentUser={setCurrentUser}
                                />} 
                                isLoggedIn={isLoggedIn} />
                        } />

                    </Routes>

                    <ToolScreen
                        tool={selectedTool}
                        onClose={closeAllPopups}
                        isOpen={isToolScreenOpen}
                        setTools={setTools}
                        isToolInfoUpdated={isToolInfoUpdated}
                        setToolInfoUpdated={setToolInfoUpdated}
                        isToolInfoDeleted={isToolInfoDeleted}
                        setToolInfoDeleted={setToolInfoDeleted}
                    />

                    <NewToolScreen
                        tool={selectedTool}
                        onClose={closeAllPopups}
                        isOpen={isNewToolScreenOpen}
                        setSelectedTool={setSelectedTool}
                        isNewToolAdded={isNewToolAdded}
                        setNewToolAdded={setNewToolAdded}
                    />

                </div>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;