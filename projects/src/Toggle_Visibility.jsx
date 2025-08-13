import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Toggle_Visibility() {
  const [text, setText] = useState('')

  const toggle = () =>{

        if(text){
            setText('')
        }

        else{

            setText('Display')
        }
  }

  return (
    <>
        <button onClick={toggle}>Toggle me</button>
      <h1>{text}</h1>
    </>
  )
}

export default Toggle_Visibility;
