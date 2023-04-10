
// ASSETS
import * as BsIcons from 'react-icons/bs'

const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunsetDate, sunsetTime, sunriseDate, sunriseTime} = props;

    const departureDate = sunriseRun ? sunriseDate : sunsetDate

    const departureTime = sunriseRun ? sunriseTime : sunsetTime

    return(
        <section className="sunDisplay">
            <button className="star" onClick={props.handleClick}>
                <BsIcons.BsStar />
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