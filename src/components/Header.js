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
                    <span className="sr-only">Logo and navigation to home.</span>
                </figure>
            </Link>
            <button onClick={toggleTheme} className="themeButton"><span className="sr-only">Light and dark mode toggle button</span>{themeToggleIcon}</button>
        </header>
    )
}

export default Header;