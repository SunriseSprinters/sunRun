// Instructions component
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Instructions = () => {
    return (
        <section className="instructions">
            <div className="wrapper instructionsFlex">
                <div className="instructionsContainer">
                    <Link to="/" className="homepage"><AiOutlineArrowLeft/></Link>
                    <h3>How To Use SunRun</h3>
                    <ol className="instructionsList">
                        <li>
                            Enter your initials!
                        </li>
                        <li>
                            Enter the date that you'd like to run.
                        </li>
                        <li>
                            Choose either you'd like to catch a <em>sunrise</em> run or a <em>sunset</em> run.
                        </li>
                        <li>
                            If you've chosen a sunset run, and you'd like to get home before the sun sets, enter how long you'd like to run for.
                        </li>
                        <li>
                            Once you've submitted, you'll have an option to save your run for future reference!
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Instructions;