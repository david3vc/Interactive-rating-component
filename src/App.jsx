import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import Thanks from './components/Thanks'
// import './App.css'

function App() {
  const [presionado, setPresionado] = useState(false);

  // useEffect(()=>{
  //   console.log(presionado, estadoPresionado);
  // },[presionado]);
  const [puntuacion, setPuntuacion] = useState([]);
  // useEffect(()=>{
  //   console.log(puntuacion);
  // },[puntuacion]);
  const [estadoPresionado, setEstadoPresionado] = useState([
      {
          num: 1,
          estado: false
      },
      {
          num: 2,
          estado: false
      },
      {
          num: 3,
          estado: false
      },
      {
          num: 4,
          estado: false
      },
      {
          num: 5,
          estado: false
      },
  ]);

  return (
    <div className="">
      {
        puntuacion && puntuacion.every(item => item.estado === false) ? (
          <Card data={estadoPresionado} setData={setEstadoPresionado} setPresionado={setPresionado} setPuntuacion={setPuntuacion} />
        ) : (
          <Thanks puntuacion={puntuacion} />
        )
      }
    </div>
  )
}

export default App
