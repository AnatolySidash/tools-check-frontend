import React from 'react'
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
            <span className="preloader__text">Загружаю список средств измерения</span>
        </div>
    )
};

export default Preloader
