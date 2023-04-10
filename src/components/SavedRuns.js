// SavedRuns.js

// ASSETS
import * as BsIcons from 'react-icons/bs'
import * as IoIcons from 'react-icons/io';

const SavedRuns = (props) => {

    return (
        <li className="userSavedRuns" id={props.id} >
            <button id={props.id} onClick={props.handleRemove} className="star">
                {/* ⭐️ */}
                ❤️
            </button>
            <p className='savedDate'><span>Date:</span> {props.date}</p>
            <p className='savedSun'>{props.sunMode}</p>
            <p className='savedTime'>Leave at: {props.time}</p>
        </li>
    )
}

export default SavedRuns;

// Pseudo Code 

// Import Firebase and the required methods 
// Create an onClick(handleSubmit) that will push currently displayed run information to our database
    // Create a reference to our database
// Create onValue to detect change to database and re-render the newly updated list of "saved runs" to our page
// Create a second onClick to remove entries from the list.



//... Solution #1
// User clicks the star button to save their run to SavedRuns
    //  handleSubmit
// ... how do we add that run to the db?
// onValue() will take a snapshot of the db
    // then we will take that snapshot and save it in setSavedRun state 

// ... Solution #2 
// in our SunInfo.js or Form.js we need to:
    // create a handleSubmit for our ⭐️ button
        // get the user's selected date, sunrise or sunset selection and date and time data from the API 
        // create an object (userRunObj) to send to firebase db when the user clicks the ⭐️ button (handleSubmit)
        // reference the db
        // push the value of userRunObj to the db

// in our SavedRuns.js 
    // create states for the data we get from the db?
    // connect firebase  using useEffect()
    // create an event listener that'll be triggered by firebase and call the data response
    // ... we receive data back in an object?
    // use a for-in loop to iterate over it and access each individual saved run object
    // push each saved run object to an array 
    // call the set state to update the components state...?

// Revised Solution
// ⭐️ button lives in SunDisplay.js
    // create an onClick -- triggers a function that lives in SunInfo -- this will push it into firebase 
    