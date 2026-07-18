import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { SumProvider } from './context/SumProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SumProvider>


      <App />
      </SumProvider>

    </ThemeProvider>
  </StrictMode>,
)
