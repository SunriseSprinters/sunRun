import * as BsIcons from 'react-icons/bs'

const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunData, sunsetDeparture, sunriseDeparture} = props;

    const departureTime = sunriseRun ? sunriseDeparture : sunsetDeparture

    return(
        <section className="sunDisplay">
            <BsIcons.BsStar />
            <p>Start your SunRun at:</p>
            <h2>{departureTime}</h2>
        </section>
    )
}

export default SunDisplay;