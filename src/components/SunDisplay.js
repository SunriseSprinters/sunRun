

const SunDisplay = (props) => {

    console.log('display', props)

    const {sunriseRun, sunData} = props;

    const departureTime = sunriseRun ? sunData.results.sunrise : sunData.results.sunset;

    return(
        <p>Start your SunRun at: <span>{departureTime}</span></p>
    )
}

export default SunDisplay;