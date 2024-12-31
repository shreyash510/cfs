import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import the HTML5 backend


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}> 
        <App />
      </DndProvider>
    </BrowserRouter>
  </StrictMode>,
)
