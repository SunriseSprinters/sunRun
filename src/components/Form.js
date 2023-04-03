
const Form = (props) => {

    const {handleChange, handleSubmit} = props;

    return (
        <section className="form">
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="date">date</label>
                <input onChange={handleChange} type="text" name="date" id="date" placeholder="yyyy-mm-dd" />
                <button>Get Sun Data!</button>
            </form>
        </section>
    )
}

export default Form; 