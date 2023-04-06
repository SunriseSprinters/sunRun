import { Link } from 'react-router-dom';
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

// ASSETS
import Logo from '../assets/Logo.png';

const Header = (props) => {

const {toggleTheme, pageTheme} = props;

const themeToggleIcon = pageTheme === 'light'
        ? <><BsSunFill/></>
        : <><BsMoonFill/></> 


    return (
        <header>
            <Link to="/">
                <figure className="logo">
                    <img src={Logo} alt="Sun Run logo"/>
                </figure>
            </Link>
            <button onClick={toggleTheme} className="themeButton">{themeToggleIcon}</button>
        </header>
    )
}

export default Header;