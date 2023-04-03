
const Form = (props) => {
    // de-structuring the props and using the passed down functions for onSubmit and onChange events.
    const {handleChange, handleSubmit} = props;

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="date">date</label>
                <input onChange={handleChange} type="date" name="date" id="date" required/>
                <button>Get Sun Data!</button>
            </form>
        </section>
    )
}

export default Form; 