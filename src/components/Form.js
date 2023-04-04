import { useState, useEffect } from "react";
import { FiSunrise } from 'react-icons/fi'
import { FiSunset } from 'react-icons/fi'
import { GiRunningShoe } from 'react-icons/gi'

const Form = (props) => {
    // de-structuring the props and using the passed down functions for onSubmit and onChange events.
    const {handleChange, handleSubmit, handleToggle, sunriseRun} = props;

    const toggleDisplay = sunriseRun 
        ? <><FiSunrise className="left"/><span className="sr-only">sunrise</span></>
        : <><FiSunset className="right"/><span className="sr-only">sunset</span></> 


    const today = new Date();
    const date = today.getFullYear() + '-' + 0+(today.getMonth()+1) + '-' + 0+today.getDate();

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
                <a onClick={handleToggle}>{toggleDisplay}</a>
                {sunriseRun === false && 
                    <>
                        <label className="sr-only">Length of run</label>
                        <input 
                            type="numbers" 
                            placeholder="enter run length in minutes">
                        </input>
                    </>}
                <button>Get Sun Data!</button> 
            </form>
        </section>
    )
}

export default Form; 