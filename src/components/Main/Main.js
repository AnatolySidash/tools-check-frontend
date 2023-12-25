import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { ThemeContext } from '../../contexts/ThemeContext';
import Preloader from './../Preloader/Preloader.js';
import Header from './../Header/Header.js';
import { logoList } from '../../utils/Constants.js';
import { greetingList } from '../../utils/Constants.js';
import logo_add from './../../images/05_hero/logo_add.svg';
import logo_add_dark from './../../images/05_hero/logo_add_dark.svg';
import logo_search from './../../images/05_hero/logo_search.svg';
import logo_update from './../../images/05_hero/logo_update.svg';
import logo_status from './../../images/05_hero/logo_status.svg';
import logo_download from './../../images/05_hero/logo_download.svg';

function Main({ isLoggedIn, isLoading }) {

   const currentUser = React.useContext(CurrentUserContext);
   const { theme } = React.useContext(ThemeContext);

   function getLogo() {
      let randomNumber = Math.floor(Math.random() * logoList.length);
      let image = logoList[randomNumber];
      return image;
   };

   function getGreeting() {
      let randomNumber = Math.floor(Math.random() * greetingList.length);
      let greeting = greetingList[randomNumber];
      return greeting;
   };

   return (
      <>
         <Header
            isLoggedIn={isLoggedIn}
         />
         {(isLoggedIn && isLoading) ? <Preloader/> :
         <main className="main">
            <section className='about'>
               <div className='about__block'>
                  <h1 className='about__title'>О системе</h1>
                  <p className='about__greeting'>{getGreeting()}, {isLoggedIn ? currentUser.name : 'Гость'}!</p>
                  {isLoggedIn ? 
                  <>
                     <p className='about__info'>Вы успешно авторизовались в Системе Учёта Средств Измерения, или сокращенно "СУСИ".</p>
                     <p className='about__info'>На панели управления есть две основные вкладки для работы с системой.</p>
                     <p className='about__info'>Вкладка <span className='about__accent'>"Показатели"</span> показывает актуальный статус средств измерения по департаментам и сотрудникам.</p>
                     <p className='about__info'>Вкладка <span className='about__accent'>"Средства измерения"</span> отвечает за добавление новых СИ, поиск, обновление и выгрузку данных.</p>
                  </>
                  : 
                  <>
                     <p className='about__info'>Вы зашли в Систему Учёта Средств Измерения, или сокращенно "СУСИ".</p>
                     <p className='about__info'>Для начала работы в системе вам необходимо авторизоваться.</p>
                     <p className='about__info'>Для авторизации жмите на кнопку "Войти"</p>
                  </>
                  }
               </div>
               <div className='about__block'>
                  <img src={getLogo()} alt='изображение датчика давления на трубе' className='about__image'/>
               </div>
            </section>
            <section className='features'>
               <h1 className='features__title'>Основные функции</h1>
               <p className='features__info'>Система создана для учёта и управления средствами измерения.</p>
               <ul className='features__list'>
                  <li className='features__item'>
                     <img src={theme === 'dark' ? logo_add_dark : logo_add} alt='' className='features__icon'/>
                     <h2 className='features__subtitle'>Регистрация</h2>
                     <p className='features__note'>Система позволяет добавить новое средство измерения и создать учётную карточку для удобного управления.</p>
                  </li>
                  <li className='features__item'>
                     <img src={logo_search} alt='' className='features__icon'/>
                     <h2 className='features__subtitle'>Поиск</h2>
                     <p className='features__note'>Система позволяет найти конкретное средство измерения для анализа и внесения изменений.</p>
                  </li>
                  <li className='features__item'>
                     <img src={logo_update} alt='' className='features__icon'/>
                     <h2 className='features__subtitle'>Обновление данных</h2>
                     <p className='features__note'>Система позволяет вносить изменения в карточки средств измерения при необходимости.</p>
                  </li>
                  <li className='features__item'>
                     <img src={logo_status} alt='' className='features__icon'/>
                     <h2 className='features__subtitle'>Контроль статуса</h2>
                     <p className='features__note'>Система предоставляет данные о статусе средств измерения в удобном формате.</p>
                  </li>
                  <li className='features__item'>
                     <img src={logo_download} alt='' className='features__icon'/>
                     <h2 className='features__subtitle'>Выгрузка</h2>
                     <p className='features__note'>Система позволяет выгрузить список средств измерения при необходимости.</p>
                  </li>
               </ul>
            </section>
         </main > }
      </>
   )
}

export default Main;