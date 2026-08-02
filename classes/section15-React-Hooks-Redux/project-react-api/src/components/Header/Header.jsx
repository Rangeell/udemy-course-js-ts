import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Substitui a tag HTML `<a>` para navegação interna, evitando o recarregamento da página.
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../store/modules/auth/actions';
import { Nav } from './styles';

export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispath(actions.loginFailure());
    navigate('/');
  };

  return (
    <Nav>
      <Link to="/" target=''>
        <FaHome size={24} />
      </Link>

      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/login">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color='#66ff33' />}
    </Nav >
  );
}
