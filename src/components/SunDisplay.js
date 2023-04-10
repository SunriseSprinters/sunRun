// ASSETS
import * as AiIcons from 'react-icons/ai'

const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunsetDate, sunsetTime, sunriseDate, sunriseTime, runFaved} = props;

    const departureDate = sunriseRun ? sunriseDate : sunsetDate

    const departureTime = sunriseRun ? sunriseTime : sunsetTime
    
    const favIcon = runFaved ? <AiIcons.AiFillHeart/> : <AiIcons.AiOutlineHeart/> ;

    return(
        <section className="sunDisplay">
            <button className="heart" onClick={props.handleClick}>
                {favIcon}
            </button>
            <p>Start your SunRun at:</p>
            <h2>
                {departureDate} 
                <span>
                    {departureTime}
                </span>
            </h2>
        </section>
    )
}

export default SunDisplay;