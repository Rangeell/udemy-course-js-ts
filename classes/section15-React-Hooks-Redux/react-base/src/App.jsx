// import { useState } from 'react';

import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles'; // Dica: todo componente do React começa com letra maiúscula

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
      </BrowserRouter>
    </>
  );
}

export default App;
