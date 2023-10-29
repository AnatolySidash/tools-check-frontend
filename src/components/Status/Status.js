import React from 'react';
import Header from '../Header/Header.js';
import Department from './../Department/Department.js';

function Status({ isLoggedIn }) {

   return (
      <>
         <Header
            isLoggedIn={isLoggedIn}
         />

         <main className="status">
            <h1 className='status__title'>Ключевые показатели подразделений</h1>
            <Department/>
         </main >

      </>
   )
}

export default Status;