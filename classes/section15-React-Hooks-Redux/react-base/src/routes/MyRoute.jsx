import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

export default function MyRoute({ element, isClosed = false }) {
  const isLoggeIn = true; // Esse valor vai estar presente dentro do estado do Redux (estado global)
  const location = useLocation(); // Obtém a rota atual

  if (isClosed && !isLoggeIn) { // A rota é fechada e o usuário não está logado?
    return (
      <Navigate
        to={'/login'} // Redirecionamento para a rota
        replace // Evita que a rota protegida fique no histórico do navegador
        state={
          { prevPath: location.pathname } // Guarga a rota atual
        }
      />
    );
  }

  return element; // Caso tenha acesso, renderiza normalmente
}

MyRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isClosed: PropTypes.bool,
};
