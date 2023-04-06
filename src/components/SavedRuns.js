// SavedRuns.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import app from '../firebase';

import { getDatabase, onValue, push, remove, ref } from 'firebase/database';

// ASSETS
import * as IoIcons from 'react-icons/io';

const SavedRuns = () => {

    const [sidebar, setSidebar] = useState(false);
    const openSidebar = () => {
        setSidebar(!sidebar);
    }

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
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SavedRuns;