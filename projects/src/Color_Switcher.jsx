import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Color_Switcher() {
  const [color, setColor] = useState('Black')

  const setColorfunction = (e) => {

    setColor(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <select name="colors" id="colorId" onChange={setColorfunction}>

        <option value="black">BLACK</option>
        <option value="red">RED</option>
        <option value="blue">BLUE</option>
        <option value="green">GREEN</option>

      </select>

      <div style={{backgroundColor: color, width: '100px', height: '100px'}}>
      </div>
    </>
  )
}

export default Color_Switcher
