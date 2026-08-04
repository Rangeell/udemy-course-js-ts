import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
