import { Link } from 'react-router-dom';

// ASSETS
import Logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <figure className="logo">
                    <img src={Logo} alt="Sun Run logo"/>
                </figure>
            </Link>
        </header>
    )
}

export default Header;