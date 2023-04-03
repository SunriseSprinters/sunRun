
const Form = (props) => {

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