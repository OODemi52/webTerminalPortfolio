import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path="save-the-date/:queryParam" element={<App />} />
    </Routes>
  </Router>
  </StrictMode>,
)
