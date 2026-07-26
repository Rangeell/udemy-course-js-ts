// import { useState } from 'react';

import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles'; // Dica: todo componente do React começa com letra maiúscula
import { ToastContainer } from 'react-toastify'; // Container global de notificações

import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      {/* O componente que deve envolver toda a aplicação para permitir o uso de rotas e links. */}
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className={'toast-Container'} />
      </BrowserRouter>
    </>
  );
}

export default App;
