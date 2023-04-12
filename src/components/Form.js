import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Form = (props) => {
    // de-structuring the props and using the passed down functions for onSubmit and onChange events.
    const {handleChange, handleSubmit, handleToggle, sunriseRun, sunsetRun, handleInitials, initialsInput, dateInput, typedValue} = props;

    const toggleDisplay = sunriseRun 
        ? <><FiSunrise className="left"/> Sunrise<span className="sr-only">sunrise</span></>
        : <><FiSunset className="right"/> Sunset<span className="sr-only">sunset</span></> 

    const today = new Date();
    // added conditionals to set date format to prevent user from selecting a day from the past
    let day = today.getDate()
    if (day < 10) {
        day = '0' + day;
    }
    let month = (today.getMonth() + 1)
    if (month < 10) {
        month = '0' + month;
    }
    const year = today.getFullYear();
    const date = year + '-' + month + '-' + day;

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <Link to="/" className="homepage"><AiOutlineArrowLeft alt="Back to Home" /><span className="sr-only">back arrow to home page</span></Link>
                <label htmlFor="initials">
                    Add your Initials
                </label>
                <input 
                type="text" 
                id="initials" 
                name="initials"
                className='initials'
                onChange={handleInitials}
                value={initialsInput}
                placeholder='Initials'
                maxLength='3'
                required />
                <label 
                    htmlFor="date" >
                        date
                    </label>
                <input 
                    onChange={handleChange} 
                    type="date" 
                    name="date" 
                    id="date" 
                    required
                    placeholder="yyyy-mm-dd" 
                    min={date}
                    value={dateInput}
                    today={today}
                    />
                <label htmlFor="runTime" >Run at</label><button type="button" onClick={handleToggle}>{toggleDisplay}</button>
                {sunriseRun === false && 
                    <>
                        <label htmlFor="runTime" >Length of run</label>
                        <input
                            name="runTime"
                            onChange={sunsetRun}
                            type="number" 
                            placeholder="run time (min)"
                            required
                            value={typedValue}
                            min="1">
                        </input>
                    </>}
                <button type="submit" className="submit" aria-label="Submit running information">Let's Run<span></span>
                </button> 
            </form>
        </section>
    )
}

export default Form; 
