import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
<link rel="stylesheet" href="index.css" />

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <h1 onMouseOver={()=>{
        alert("Click the Circle")
      }}> Hey! </h1>
      <div className='Container' onClick={()=>{
        alert("Hey Its Me Azaan-Ayaz")
      }}></div>    
    </React.Fragment>
  )
}

export default App
