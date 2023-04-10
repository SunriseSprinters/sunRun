// SavedRuns.js
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';

import app from '../firebase';
import SavedRuns from './SavedRuns';

// ASSETS
import * as IoIcons from 'react-icons/io';

const SideBar = () => {

    // Variable to hold db details:
    const database = getDatabase(app);
    // Variable that references our db:
    const dbRef = ref(database);

    const [runState, setRunState] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const openSidebar = () => {
        setOpenMenu(!openMenu);
        setSidebar(!sidebar);
    }

    useEffect(() => {
        // Event listener that will fire from the db and call the data 'response'
        onValue(dbRef, (response) => {

            const arrayOfRuns = []
            // Save our response in a variable
            const dataResponse = response.val();

            // Data is an object so we iterate using a for-in loop to access each saved run object
            for(let key in dataResponse) {
                const userRun = {
                    id: key,
                    time: dataResponse[key].startTime,
                    date: dataResponse[key].date,
                    sunMode: dataResponse[key].sunset
                }

                // Push each saved run object to an array we created in arrayOfRuns
                arrayOfRuns.push(userRun)
            }
            setRunState(arrayOfRuns);
        })
    }, [])

    // function expression that calls the removeUser function that targets the id through the event object
    const handleRemove = (e) => {
        removeUser(e.target.id);
    }

    // function expression that utilize the remove function imported from firebase
    const removeUser = (id) => {
        const userRef = ref(database, `/${id}`)
        remove(userRef);
    }
    
    return (
        <section className="savedRuns">
            <div className={openMenu ? "openMenu active" : 'openMenu'}>
            <Link to ="#" className="sideButton" onClick={openSidebar}>
                <p>Saved Runs</p>
                    {sidebar ? <IoIcons.IoIosArrowForward /> : <IoIcons.IoIosArrowBack /> }
            </Link>
            </div>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <div className="sidebarContainer">
                    <ul className="sidebarItems">
                        {runState.map((userRun) => {
                            return (
                                <SavedRuns 
                                    id={userRun.id}
                                    key={userRun.id} 
                                    time={userRun.time} 
                                    date={userRun.date} 
                                    sunMode={userRun.sunMode} 
                                    handleRemove={handleRemove}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SideBar;