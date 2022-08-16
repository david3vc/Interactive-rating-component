import React, { useState } from 'react'
import './Card.css';
import iconoStar from '../assets/icon-star.svg'

const Card = ({data, setData}) => {
    const [checked, setChecked] = useState(false);
    
    const presionado = i => {
        console.log(i);
        const arr = data;

        for (let index = 0; index < arr.length; index++) {
            if(arr[index].num-1 === i){
                arr[index].estado = !arr[index].estado;
                setChecked(!arr[index].estado);
            }
        }
        console.log(arr);
        setData(arr);
    }

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
                            {
                                data && data.map(
                                    (item, i) => item.estado === true ? (
                                        <li className='contenedor__puntaje lista__item--presionado' onClick={()=>presionado(i)}>{item.num}</li>
                                    ) : (
                                        <li className='contenedor__puntaje lista__item' onClick={()=>presionado(i)}>{item.num}</li>
                                    )
                                )
                            }
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