// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Paco from './paco/paco.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/paco" element={<Paco />} />
    </Routes> 
  </BrowserRouter>,
)
