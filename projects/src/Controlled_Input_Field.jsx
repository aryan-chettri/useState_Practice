import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Controlled_Input_Field() {

    const [text, setText] = useState('')


    const setTextfunction = (e) =>{
        setText(e.target.value);
    }
  return (
    <>
      <input type="text" onChange={setTextfunction}/>
      <h1>Input text:</h1>
      <h2>{text}</h2>
    </>
  )
}

export default Controlled_Input_Field;
