import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from 'react-icons/ai';
import 'animate.css'
import sunsetIcon from "../assets/sunset.png"
import sun from "../assets/sun.png";

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
                        <h2>Welcome to SunRun!</h2>
                        <p className="pText">Say goodbye to dull runs and hello to a more exciting workout experience with our app designed to help you plan a scenic route while keeping track of the sunrise and sunset times.</p>
                        
                        <p>Click the arrow below to start planning your run</p>
                    </div>

                    <div className="sunCircle">
                        <img src={sun} alt="background sun" className="sunMobile" />

                        <div className="buttonContainer">
                            <Link to={`/sunApp`}>
                                <button className="arrowDownButton"><AiOutlineArrowDown />
                                    <span className="sr-only">Click here to start planning your runs</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;