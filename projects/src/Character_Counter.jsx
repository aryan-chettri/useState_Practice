import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Character_Counter() {

    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);

    const setTextfunction = (e) => {

        setText(e.target.value)
    }

  return (
    <>
        <input type="text" onChange={setTextfunction}/>
      <div>Character Count: {text.length}</div>
    </>
  )
}

export default Character_Counter;
