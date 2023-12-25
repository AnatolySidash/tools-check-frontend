import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';
import logoDark from '../../images/01_header/logo_dark.svg';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navigation({ isLoggedIn }) {

   const { theme, toggleTheme } = React.useContext(ThemeContext);

   return (
      <nav className='navigation'>
         <NavLink to='/' className="navigation__logo">
            <img src={theme === 'dark' ? logo : logoDark} alt="Логотип сайта в виде датчиков давления" className="logo" />
         </NavLink>
         { isLoggedIn && <ul className="navigation__list">
            <li>
               <NavLink to="/status" className="navigation__link">Показатели</NavLink>
            </li>
            <li>
               <NavLink to="/tools" className="navigation__link">Средства измерения</NavLink>
            </li>
         </ul> }
         { !isLoggedIn && <ul className="navigation__button-list">
            <li className="navigation__item">
               <NavLink to="/signup" className="navigation__button">Регистрация</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/signin" className="navigation__button navigation__button_green">Войти</NavLink>
            </li>
         </ul> }
         { isLoggedIn && <NavLink to="/Profile" className="navigation__button navigation__button_gray">Аккаунт</NavLink> }
         <div className='navigation__switch'>
            <label>{theme === 'dark' ? "Тёмная тема" : "Светлая тема"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} onColor='#6666FF' />
         </div>
      </nav>
   )
}

export default Navigation;

