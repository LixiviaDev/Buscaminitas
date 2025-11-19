// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Paco from './paco/paco.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <HashRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="paco" element={<Paco />} />
      {/* <Route path={`${import.meta.env.VITE_URI_PREFIX}`}>
      </Route> */}
    </Routes> 
  </HashRouter>,
)