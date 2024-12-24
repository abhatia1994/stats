import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { CreatePage } from './pages/create';
import { HomePage } from './pages/home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/" element={<HomePage />} />
    </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
