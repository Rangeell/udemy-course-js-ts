import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Redirect from './components/Redirect/Redirect';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Post';
import Post from './components/Post/Posts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts />} /> Rota mais específica */}

        <Route path='/posts' element={<Posts />}> {/* Rota mais específica */}
          {/* Path do elemento filho é relativo ao elemento pai, ou seja, ele precisa apenas do complemento -> :id */}
          <Route path=':id' element={<Post />} />
        </Route>

        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
