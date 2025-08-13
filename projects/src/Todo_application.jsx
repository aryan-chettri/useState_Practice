import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Todo_application() {
  
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    const setTodosfunction = (e) =>{
        if(e.target.value){
            setInput(e.target.value);
        }
    }

    const setArrfunction = () =>{
        if(input.trim()){
            setTodos([...todos, input]);
            setInput('');
        }
        
    }

  return (
    <>
      <input type="text" value={input} onChange={setTodosfunction} />
      <button onClick={setArrfunction}>Add Todo</button>

      <ul>
            {todos.map((todo, index)=>(
                    <li key={index}>
                        {todo}
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </li>
            ))}
      </ul>
    </>
  )
}

export default Todo_application
