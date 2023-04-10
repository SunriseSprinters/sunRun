
const SavedRuns = (props) => {

    const {id, handleRemove, date, sunMode, time} = props;

    return (
        <li className="userSavedRuns" id={id} >
            <button id={id} onClick={handleRemove} className="heart">
                ❤️
            </button>
            <p className='savedDate'><span>Date:</span> {date}</p>
            <p className='savedSun'>{sunMode}</p>
            <p className='savedTime'>Leave at: {time}</p>
        </li>
    )
}

export default SavedRuns;
