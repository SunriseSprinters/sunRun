const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunData} = props;

    const departureTime = sunriseRun ? sunData.results.sunrise : sunData.results.sunset

    return(
        <section className="sunDisplay">
            <p>Start your SunRun at: <span>{departureTime}</span></p>
        </section>
    )
}

export default SunDisplay;