import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MyRoute({ element, isClosed }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Esse valor vai estar presente dentro do estado do Redux (estado global)
  const location = useLocation(); // Obtém a rota atual

  if (isClosed && !isLoggedIn) { // A rota é fechada e o usuário não está logado?
    return (
      <Navigate // Substiui o antigo "Redirect"
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
