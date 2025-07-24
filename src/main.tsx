import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRouter from './Router/MainRouter/Index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MainRouter/>
  </StrictMode>,
)
