import { Link } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineExpandAlt, AiOutlineClose } from 'react-icons/ai';
import 'animate.css'
import sunsetIcon from "../assets/sunset.png"

const Home = () => {

    const handleClick = () => {
        console.log("hello it me")
    }


    return (
        <main>
            <section className="homePage">
                <div className="wrapper">
                    <div className="homeTextContainer">
                        <img src={sunsetIcon} alt="sunset with birds icon" />
                        <h1 className="animate__animated animate__bounceInRight">SunRun</h1>
                    </div>

                    {/* Modal expansion for smaller screen sizes */}
                    <div className="modalContainer">
                        <button className="openModal" onClick={handleClick}><AiOutlineExpandAlt />
                            <span className="sr-only">Open for instructions</span>
                        </button>

                        <div className="modalPop">
                            <div className="modalContent">
                                <span className="closeModal"><AiOutlineClose /></span>
                                <div className="textContainer">
                                    <h2>Welcome to SunRun!</h2>
                                    <p>Say goodbye to dull runs and hello to a more exciting workout experience with our app designed to help you plan a scenic route while keeping track of the sunrise and sunset times.</p>
                                    
                                    <ul className="instructions">
                                        <li>Select the date you want to run.</li>
                                        <li>Pick sunrise or sunset.</li>
                                        <li>If you selected <em>sunset</em>, enter the duration of your run, but in minutes! </li>
                                    </ul>
                                    <p>Click the arrow below to start planning!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of modalContainer div */}

                    <div className="textContainer">
                        <h2>Welcome to SunRun!</h2>
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
                            <button className="arrowDownButton"><AiOutlineArrowDown />
                                <span className="sr-only">Click here to start planning your runs</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;