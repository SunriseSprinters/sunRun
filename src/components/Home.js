import { Link } from "react-router-dom";
import sunsetIcon from "../assets/sunset.png"

// ASSETS
import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
    return (
        <main>
            <section className="homePage">
                <div className="wrapper">
                    <div className="homeTextContainer">
                        <img src={sunsetIcon} alt="sunset with birds icon" />
                        <h1>SunRun</h1>
                    </div>

                    <div className="textContainer">
                        <p>Welcome to SunRun!</p>
                        <p>Are you a runner looking for a new and exciting way to plan your next scenic run?</p>
                        <p>We've got you covered! Say goodbye to dull runs and hello to a more exciting workout experience with our app designed to help you plan a scenic route while keeping track of the sunrise and sunset times.</p>
                        {/* <p>All you gotta do is tell us the date you want to run, pick your favorite sunrise or sunset time, and let us know how long you're planning to run.</p> */}
                        <p>Click the arrow below to start planning!</p>
                    </div>

                    <Link to={`/sunApp`}>
                        <h4><AiOutlineArrowDown /></h4>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home;