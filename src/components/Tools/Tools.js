import React from 'react';
import Header from '../Header/Header.js';
import ToolsCardList from '../ToolsCardList/ToolsCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Tools({ isLoggedIn, tools, setTools, onToolClick, onNewToolAdd, localDB, onRespChange }) {

    return (
       <>
          <Header 
            isLoggedIn={isLoggedIn}
          />
            <main className="tools">
                <SearchForm 
                  setTools={setTools}
                  tools={tools}
                  localDB={localDB}
                />
                <ToolsCardList 
                  tools={tools}
                  onToolClick={onToolClick}
                  onNewToolAdd={onNewToolAdd}
                  onRespChange={onRespChange}
                />
            </main >
       </>
    )
 }
 
 export default Tools;