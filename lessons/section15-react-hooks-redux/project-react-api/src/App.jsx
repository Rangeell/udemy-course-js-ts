// import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Container global de notificações
import { Provider } from 'react-redux'; // Componente que permite que todos os componentes tenham acesso ao estado global
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store/store';
import AppRoutes from './routes/Routes';
import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles'; // Dica: todo componente do React começa com letra maiúscula

function App() {
  return (
    <>
      {/* Componente que permite que todos os componentes da aplicação tenham acesso ao estado global */}
      <Provider store={store}>
        <PersistGate persistor={persistor}> {/* Componente que pertimite persistência do estado */}
          <BrowserRouter>
            <Header />
            <AppRoutes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className={'toast-Container'} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
      {/* O componente que deve envolver toda a aplicação para permitir o uso de rotas e links. */}
    </>
  );
}

export default App;
