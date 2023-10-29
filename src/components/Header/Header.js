import React from 'react';

import Navigation from './../Navigation/Navigation.js';

function Header({ isLoggedIn }) {

   return (
      <header className="header">
         <Navigation 
            isLoggedIn={isLoggedIn}
         />
      </header >
   )
}

export default Header;