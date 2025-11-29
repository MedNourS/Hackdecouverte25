import React from "react";

function Nav(){

    return(
        <nav className="nav-bar">
        
            <ul className="nav-links">

                <li>
                    <Link to="./Home">Home</Link>
                </li>

                <li>
                    <Link to="./GroupPage">My Groups</Link>
                </li>

                <li>
                    <Link to="./AllGroups">All Groups</Link>
                </li>

                <li>
                    <Link to="./Calendar">Calendar</Link>
                </li>

            </ul>
            
        </nav>
    )

}

export default Nav;