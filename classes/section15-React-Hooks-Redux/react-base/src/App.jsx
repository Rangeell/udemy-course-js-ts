// import { useState } from 'react';

import Header from './components/Header';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles'; // Dica: todo componente do React começa com letra maiúscula

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
