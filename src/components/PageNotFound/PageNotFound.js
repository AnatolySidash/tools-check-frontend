import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

   const navigate = useNavigate();

   return (
      <main className="pagenotfound">
         <h1 className="pagenotfound__title">404</h1>
         <p className="pagenotfound__text">Страница не найдена</p>
         <button onClick={() => navigate(-1)} className="pagenotfound__link">Назад</button>
      </main >
   )
}

export default PageNotFound;