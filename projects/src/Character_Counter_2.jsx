import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Character_Counter_2() {

    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);

    const setTextfunction = (e) => {

        setText(e.target.value)
    }

    const setCharCountfunction = (e) =>{
        setCharCount(e.target.value.length);
    }

  return (
    <>
        <input type="text" onChange={setCharCountfunction}/>
      <div>Character Count: {charCount}</div>
    </>
  )
}

export default Character_Counter_2;
