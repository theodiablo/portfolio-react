import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo'
import '../index.css'
import { RunningCoachPage } from './RunningCoachPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RunningCoachPage />
  </StrictMode>,
)
