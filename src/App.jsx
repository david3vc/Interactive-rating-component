import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import Thanks from './components/Thanks'
// import './App.css'

function App() {
  // const [arrayPuntaje, setArrayPuntaje] = useState([1, 2, 3, 4, 5]);

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
      <Card data={estadoPresionado} setData={setEstadoPresionado} />
      {/* <Thanks /> */}
    </div>
  )
}

export default App
