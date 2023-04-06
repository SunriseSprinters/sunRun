// SavedRuns.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';

import app from '../firebase';

// ASSETS
import * as IoIcons from 'react-icons/io';

const SideBar = () => {

    const [arrayOfRuns, setArrayOfRuns] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const openSidebar = () => {
        setSidebar(!sidebar);
    }

    useEffect(() => {
    // Variable to hold db details:
    const database = getDatabase(app);
    // Variable that references our db:
    const dbRef = ref(database);
    // Event listener that will fire from the db and call the data 'response'
    onValue(dbRef, (response) => {
        // Variable to store the new state we're creating
        const arrayOfRuns = []
        // Save our response in a variable
        const dataResponse = response.val();
        // console.log(dataResponse)
        // Data is an object so we iterate using a for-in loop to access each saved run object
        for(let key in dataResponse) {
            // Push each saved run object to an array we created in arrayOfRuns
            arrayOfRuns.push()
        }
    })

}, [])

    return (
        <section className="savedRuns">
            <div className="openMenu">
            <Link to ="#" className="sideButton" onClick={openSidebar}>
                <p>Saved Runs</p>
                    {sidebar ? <IoIcons.IoIosArrowForward /> : <IoIcons.IoIosArrowBack /> }
            </Link>
            </div>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <div className="sidebarContainer" onClick={openSidebar}>
                    <ul className="sidebarItems">
                        {/* this is hardcoded for now */}
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SideBar;