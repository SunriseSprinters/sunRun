const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunData} = props;

    const departureTime = sunriseRun ? sunData.results.sunrise : sunData.results.sunset;

    return(
        <section className="sunDisplay">
            <p>Start your SunRun at:</p>
            <h2>{departureTime}</h2>
        </section>
    )
}

export default SunDisplay;