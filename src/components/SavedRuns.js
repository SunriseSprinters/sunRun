
const SavedRuns = (props) => {

    const {id, handleRemove, date, sunMode, time} = props;

    return (
        <li className="userSavedRuns" >
            <button type="button" id={id} onClick={handleRemove} className="star">
                ⭐️
            </button>
            <p className='savedDate'>Date: {date}</p>
            <p className='savedSun'>{sunMode}</p>
            <p className='savedTime'>Leave at: {time}</p>
        </li>
    )
}

export default SavedRuns;
