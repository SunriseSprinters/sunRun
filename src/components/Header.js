import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="logo"> <Link to="/">SunRun</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;