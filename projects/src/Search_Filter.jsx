import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Search_Filter() {

  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const arr = ['apple', 'banana', 'tomatoes', 'grapes', 'pineapple', 'guava', 'pinacoladas']

  const setInputfunction = (e) => {
      setInput(e.target.value)

      for(let i = 0; i<arr.length; i++){
        if(e.target.value === arr[i].substring(0,e.target.value.length)){
            setSearch(arr[i])
        }

      }
  }
  

  return (
    <>
      <input type="text" value={input} onChange={setInputfunction}/>

      <ul>
        {arr + ''}
      </ul>

      <h1>{search}</h1>

      <button>{search}</button>
    </>
  )
}

export default Search_Filter
