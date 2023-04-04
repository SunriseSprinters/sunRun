import { Link } from "react-router-dom";
import 'animate.css'
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
                        <h1 className="animate__animated animate__bounceInRight">SunRun</h1>
                    </div>

                    <div className="textContainer">
                        <h3>Welcome to SunRun!</h3>
                        <p>Say goodbye to dull runs and hello to a more exciting workout experience with our app designed to help you plan a scenic route while keeping track of the sunrise and sunset times.</p>
                        
                        <ul className="instructions">
                            <li>Select the date you want to run.</li>
                            <li>Pick sunrise or sunset.</li>
                            <li>If you selected <em>sunset</em>, enter the duration of your run, but in minutes! </li>
                        </ul>
                        <p>Click the arrow below to start planning!</p>
                    </div>

                    <div className="buttonContainer">
                        <Link to={`/sunApp`}>
                            <button className="arrowDownButton"><AiOutlineArrowDown /></button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;