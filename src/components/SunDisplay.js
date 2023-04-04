const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunData, sunsetDeparture, sunriseDeparture} = props;

    const departureTime = sunriseRun ? sunriseDeparture : sunsetDeparture

    return(
        <p>Start your SunRun at: <span>{departureTime}</span></p>
    )
}

export default SunDisplay;