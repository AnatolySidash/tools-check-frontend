import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Navigation({ isLoggedIn }) {

   return (
      <nav className='navigation'>
         <NavLink to="/" className="navigation__logo">
            <img src={logo} alt="Логотип сайта в виде датчиков давления" className="logo" />
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
      </nav>
   )
}

export default Navigation;

