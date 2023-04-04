
const Form = (props) => {
    // de-structuring the props and using the passed down functions for onSubmit and onChange events.
    const {handleChange, handleSubmit, handleToggle, sunriseRun} = props;

    const toggleDisplay = sunriseRun ? "Sunrise Run" : "Sunset Run" 

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <label 
                    htmlFor="date" 
                    className="sr-only">
                        date
                    </label>
                <input 
                    onChange={handleChange} 
                    type="date" 
                    name="date" 
                    id="date" 
                    placeholder="yyyy-mm-dd" 
                    />
                <button type="button" onClick={handleToggle}>{toggleDisplay}</button>
                {sunriseRun === false && 
                    <>
                        <label for="runTime"className="sr-only" >Length of run</label>
                        <input
                            name="runTime"
                            type="numbers" 
                            placeholder="enter run length in minutes">
                        </input>
                    </>}
                <button type="submit">Get Sun Data!</button> 
                {/* add type to button. atm it doesnt know which is submit. preventDefault in handle submit.  */}
            </form>
        </section>
    )
}

export default Form; 