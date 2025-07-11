import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Calculadora } from './Component/Calculadora'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora />
  </StrictMode>,
)
