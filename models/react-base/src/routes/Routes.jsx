import { Routes, Route } from 'react-router-dom'; // Routes é equivalente ao antigo Switch

import MyRoute from './MyRoute';
import Login from '../pages/Login/Login';
import Page404 from '../pages/404/Page404';

export default function AppRoutes() {
  return (
    <Routes> {/* Garante que apenas uma rota seja renderizada por vez */}

      {/* Define o caminho (`path`) e qual componente deve ser exibido. */}
      <Route path='/' element={
        <MyRoute
          isClosed
          element={<Login />}
        />
      }
      />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
