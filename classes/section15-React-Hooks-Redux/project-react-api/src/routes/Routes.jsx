import { Routes, Route } from 'react-router-dom'; // Routes é equivalente ao antigo Switch

import MyRoute from './MyRoute';

// Pages
import Login from '../pages/Login/Login';
import Page404 from '../pages/404/Page404';
import Aluno from '../pages/Aluno/Aluno';
import Alunos from '../pages/Alunos/Alunos';
import Register from '../pages/Register/Register';
import Photos from '../pages/Photos/Photos';

export default function AppRoutes() {
  return (
    <Routes> {/* Garante que apenas uma rota seja renderizada por vez */}

      {/* Define o caminho (`path`) e qual componente deve ser exibido. */}
      <Route path='/' element={ // Rota pública: Listagem de alunos na raiz */
        <MyRoute
          isClosed={false}
          element={<Alunos />}
        />
      }
      />

      {/* Rotas fechadas: Exigem usuário logado */}
      <Route path='/aluno/:id/edit' element={
        <MyRoute
          isClosed={true}
          element={<Aluno />}
        />
      }
      />

      <Route path='/aluno/' element={ // Rota para criar novo aluno
        <MyRoute
          isClosed={true}
          element={<Aluno />}
        />
      }
      />

      <Route path='/fotos/:id' element={
        <MyRoute
          isClosed={true}
          element={<Photos />}
        />
      }
      />

      {/* Rotas públicas: Cadastro e Login */}
      <Route path='/login/' element={
        <MyRoute
          isClosed={false}
          element={<Login />}
        />
      }

      />
      <Route path='/register/' element={
        <MyRoute
          isClosed={false}
          element={<Register />}
        />
      }
      />

      {/* Fallback 404 */}
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}
