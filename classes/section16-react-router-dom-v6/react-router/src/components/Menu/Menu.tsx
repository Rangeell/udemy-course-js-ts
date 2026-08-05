import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/about' state={'This state from ABOUT'}>About</Link>
                </li>

                <li>
                    <Link to='/posts'>Posts</Link>
                </li>

                <li>
                    <Link to='/posts/10'>Posts 10</Link>
                </li>

                <li>
                    <Link to='/redirect'>Redirect</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;