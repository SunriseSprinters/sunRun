import { Link } from "react-router-dom";

// ASSETS
import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
    return (
        <div className="homePage">
            <section className="homeContent">
                <Link to={`/sunApp`}>
                    <h4><AiOutlineArrowDown /></h4>
                </Link>
            </section>
        </div>
    )
}

export default Home;