import { Nav } from './styles';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

// Substitui a tag HTML `<a>` para navegação interna, evitando o recarregamento da página.
import { Link } from 'react-router-dom';

export default function Header() {
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
    </Nav>
  );
}
