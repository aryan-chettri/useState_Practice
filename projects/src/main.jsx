import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Controlled_Input_Field from './Controlled_Input_Field.jsx'
import Toggle_Visibility from './Toggle_Visibility.jsx'
import Character_Counter from './Character_Counter.jsx'
import Character_Counter_2 from './Character_Counter_2.jsx'
import Todo_application from './Todo_application.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo_application />
  </StrictMode>,
)
