// SavedRuns.js

// ASSETS
import * as BsIcons from 'react-icons/bs'
import * as IoIcons from 'react-icons/io';

const SavedRuns = (props) => {

    const {id, handleRemove, date, sunMode, time} = props;

    return (
        <li className="userSavedRuns" id={props.id} >
            <button id={props.id} onClick={props.handleRemove} className="heart">
                ❤️
            </button>
            <p className='savedDate'><span>Date:</span> {props.date}</p>
            <p className='savedSun'>{props.sunMode}</p>
            <p className='savedTime'>Leave at: {props.time}</p>
        </li>
    )
}

export default SavedRuns;
