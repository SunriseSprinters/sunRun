import { useState, useEffect } from "react";

const Form = (props) => {
    // de-structuring the props and using the passed down functions for onSubmit and onChange events.
    const {handleChange, handleSubmit, handleToggle, sunriseRun} = props;

    const [curDate, setCurDate] = useState(Date());
    const toggleDisplay = sunriseRun ? "Sunrise Run" : "Sunset Run" 


    const today = new Date();
    const date = today.getFullYear() + '-' + 0+(today.getMonth()+1) + '-' + 0+today.getDate();

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="date" className="sr-only">date</label>
                <input onChange={handleChange} type="date" name="date" id="date" placeholder="yyyy-mm-dd" min={date}/>
                <a onClick={handleToggle}>{toggleDisplay}</a>
                {sunriseRun === false && <>
                <label className="sr-only">Length of run</label>
                <input type="numbers" placeholder="enter run length in minutes"></input>
                </>}
                <button>Get Sun Data!</button> 
            </form>
        </section>
    )
}

export default Form; 