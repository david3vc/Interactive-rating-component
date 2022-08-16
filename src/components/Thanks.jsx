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
                    <p>
                        You selected 4 out of 5
                    </p>
                </div>
                <div className="contenedor__subTitulo">
                    <p>
                        Thank you!
                    </p>
                </div>
                <div className='contenedor__descripcion'>
                    <p>
                        We appreciate you taking the time to give a rating. If you ever need more support, 
                        don’t hesitate to get in touch!
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Thanks;