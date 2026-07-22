import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo'
import './index.css'
import App from './App.tsx'

// Enable scroll-reveal only when JS is running (content stays visible for
// no-JS visitors and crawlers). A failsafe clears the hidden state after a
// few seconds so nothing can get stuck off-screen.
const root = document.documentElement
root.dataset.reveal = 'on'
window.setTimeout(() => {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => el.classList.add('is-visible'))
}, 2500)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
