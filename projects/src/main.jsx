import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Controlled_Input_Field from './Controlled_Input_Field.jsx'
import Toggle_Visibility from './Toggle_Visibility.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toggle_Visibility />
  </StrictMode>,
)
