import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ImText/>
     <ImText/>
     <ImText/>
     <ImText/>  
    </>
  )
}

function ImText({YourName="Imran"}) {
  return <p>YourName</p>
}

export default App
