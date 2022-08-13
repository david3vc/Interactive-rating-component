import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Card />
    </div>
  )
}

export default App
