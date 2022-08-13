import React from 'react'
import './Card.css';
import iconoStar from '../assets/icon-star.svg'

const Card = () => {
  return (
    <>
        <div className="card">
            <div className='contenedor'>
                <div className='contenedor__icono'>
                    <img src={iconoStar} alt="" />
                </div>
                <div className='contenedor__titulo'>
                    How did we do?
                </div>
                <div className='contenedor__contenido'>
                    Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!
                </div>
                <div className='contenedor__puntaje'>
                    <ul className='contenedor__puntaje lista'>
                        <li className='contenedor__puntaje lista__item'>1</li>
                        <li className='contenedor__puntaje lista__item'>2</li>
                        <li className='contenedor__puntaje lista__item'>3</li>
                        <li className='contenedor__puntaje lista__item'>4</li>
                        <li className='contenedor__puntaje lista__item'>5</li>
                    </ul>
                </div>
                <div className='contenedor__boton'>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card