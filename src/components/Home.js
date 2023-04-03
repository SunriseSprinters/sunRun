import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <section className="homeContent">
                <Link to={`/sunApp`}>
                    <h4>to App</h4>
                </Link>
            </section>
            <Footer />
        </div>
    )
}

export default Home;