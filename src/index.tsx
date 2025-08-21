import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HTTPSredirect from 'react-https-redirect'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <HTTPSredirect>
        <App />
    </HTTPSredirect>
  </StrictMode>
)
