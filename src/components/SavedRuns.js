const SavedRuns = (props) => {

    const {id, handleRemove, date, sunMode, time, initials} = props;
    console.log(initials);
    return (
        <li className="userSavedRuns" id={id} >
            <button id={id} onClick={handleRemove} className="heart">
                ❤️
            </button>
            <p className='savedDate'><span>Date:</span> {date}</p>
            <p className='savedSun'>{sunMode}</p>
            <p className='savedInitials'><span className="userInitials">Scheduled by:</span> {initials}</p>
            <p className='savedTime'>Leave at: {time}</p>
        </li>
    )
}

export default SavedRuns;
