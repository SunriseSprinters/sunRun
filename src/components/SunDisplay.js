const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunData, sunsetDate, sunsetTime, sunriseDate, sunriseTime} = props;

    const departureDate = sunriseRun ? sunriseDate : sunsetDate

    const departureTime = sunriseRun ? sunriseTime : sunsetTime

    return(
        <section className="sunDisplay">
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