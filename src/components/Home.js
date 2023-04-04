import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homePage">
            <section className="homeContent">
                <Link to={`/sunApp`}>
                    <h4>to App</h4>
                </Link>
            </section>
        </div>
    )
}

export default Home;