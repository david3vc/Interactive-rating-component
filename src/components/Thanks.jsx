import React, {useEffect, useState} from 'react';
import './Thanks.css';
import iconoThanks from '../assets/illustration-thank-you.svg';

const Thanks = ({puntuacion}) => {

    const [numero, setNumero] = useState(-1);

    useEffect(()=>{
        if(puntuacion.length > 0){
            for (let i = 0; i < puntuacion.length; i++) {
                if(puntuacion[i].estado === true){
                    setNumero(puntuacion[i].num);
                }
            }
        }
    },[puntuacion])


  return (
    <>
        <div className="card">
            <div className="contenedor">
                <div className="contenedor__icono--thanks">
                    <img src={iconoThanks} alt="" />
                </div>
                <div className="contenedor__puntaje-thanks">
                    <p>
                        You selected {numero} out of 5
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