
const Form = (props) => {

    const {handleChange, handleSubmit, handleToggle, sunriseRun} = props;

    const toggleDisplay = sunriseRun ? "Sunrise Run" : "Sunset Run" 

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="date" className="sr-only">date</label>
                <input onChange={handleChange} type="date" name="date" id="date" placeholder="yyyy-mm-dd" />
                
                <a onClick={handleToggle}>{toggleDisplay}</a>
                <button>Get Sun Data!</button> 
                {sunriseRun === false && <>
                <label className="sr-only">Length of run</label>
                <input type="numbers" placeholder="enter run length in minutes"></input>
                </>}
            </form>
        </section>
    )
}

export default Form; 