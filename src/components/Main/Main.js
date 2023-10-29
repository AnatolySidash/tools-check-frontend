import React from 'react';
import Header from './../Header/Header.js';


function Main({ isLoggedIn }) {

   return (
      <>
         <Header
            isLoggedIn={isLoggedIn}
         />

         <main className="main">

         </main >

      </>
   )
}

export default Main;