import React from 'react';
import './Thanks.css';
import iconoThanks from '../assets/illustration-thank-you.svg';

const Thanks = () => {
  return (
    <>
        <div className="card">
            <div className="contenedor">
                <div className="contenedor__icono--thanks">
                    <img src={iconoThanks} alt="" />
                </div>
                <div className="contenedor__puntaje-thanks">
                    You selected 4 out of 5
                </div>
                <div className="contenedor__titulo">
                    Thank you!
                </div>
                <div className='contenedor__contenido'>
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                </div>
            </div>
        </div>
    </>
  )
}

export default Thanks;