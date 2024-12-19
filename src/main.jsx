import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserProvider } from './Context/browser-context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserProvider>
    <StrictMode>
    <App />
    </StrictMode>   
    </BrowserProvider>   
)
