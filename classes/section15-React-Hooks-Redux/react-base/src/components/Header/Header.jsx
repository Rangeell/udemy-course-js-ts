import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Substitui a tag HTML `<a>` para navegação interna, evitando o recarregamento da página.

import { Nav } from './styles';

export default function Header() {
  const botaoClicado = useSelector(state => state.exampleReducer.botaoClicado);

  return (
    <Nav>
      <Link to="/" target=''>
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>

      <Link to="*">
        <FaUserAlt size={24} />
      </Link>

      <p style={{ color: 'black' }}>
        {botaoClicado ? 'Clicado!' : 'Não clicado!'}
      </p>
    </Nav >
  );
}
