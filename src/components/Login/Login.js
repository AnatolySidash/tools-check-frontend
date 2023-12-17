import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';
import logoDark from '../../images/01_header/logo_dark.svg';
import { useInput } from '../../utils/Validation.js';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as auth from '../../utils/Auth.js';

function Login({ onLogin }) {

   const navigate = useNavigate();
   const [isError, setError] = React.useState(false);
   const [errorMessage, setErrorMessage] = React.useState({});
   const { theme } = React.useContext(ThemeContext);

   function handleErrorMessage() {
      setError(true);
   }

   const id = useInput('', { isEmpty: true, minLength: 7});
   const password = useInput('', { isEmpty: true, minLength: 8 });

   const handleSubmit = (event) => {
      event.preventDefault();
      auth.login(id.value, password.value).then((data) => {
         onLogin();
         navigate('/tools');
      })
         .catch((err) => {
            handleErrorMessage();
            console.error(`Ошибка: ${err}`);
            setErrorMessage({
               message: err,
            })
         });
   };

   return (
      <main className="login">
         <NavLink to="/" className="navigation__logo">
            <img src={ theme === 'dark' ? logo : logoDark } alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <h1 className="login__title">Рады видеть!</h1>
         <form className="form" onSubmit={handleSubmit}>
            <label className="login__item">ID номер
               <input
                  className="form__input"
                  type="text"
                  name="id"
                  placeholder="в формате 33100777"
                  minLength={8}
                  maxLength={8}
                  value={id.value}
                  onChange={(e) => id.onChange(e)}
                  onBlur={(e) => id.onBlur(e)}
                  required>
               </input>
               {(id.isDirty && id.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(id.isDirty && id.minLengthError) && <span className="form__input-error">В ID номере должно быть 8 символов</span>}
               {(id.isDirty && id.emailError) && <span className="form__input-error">Неверный формат электронной почты</span>}
            </label>
            <label className="login__item">Пароль
               <input
                  className="form__input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  minLength={6}
                  maxLength={30}
                  value={password.value}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                  required>
               </input>
               {(password.isDirty && password.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(password.isDirty && password.minLengthError) && <span className="form__input-error">Не менее 6-ти символов</span>}
            </label>
            {isError && <span className="form__input-error form__input-error_main">{errorMessage.message}</span>}
            <button disabled={!id.inputValid || !password.inputValid} type="submit" className="form__button">Войти</button>
            <Link to="/signup" className="login__link">Ещё не зарегистрированы? <span className="login__link-accent">Регистрация</span></Link>
         </form>
      </main >
   )
}

export default Login;