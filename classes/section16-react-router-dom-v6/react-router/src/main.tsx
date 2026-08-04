import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Post from './components/Post/Post';
import Redirect from './components/Redirect/Redirect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<Post />} /> {/* Rota mais específica */}
        <Route path='/posts' element={<Post />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
