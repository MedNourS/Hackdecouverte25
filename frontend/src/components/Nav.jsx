import React from "react";
import Home from "../pages/Home.jsx";
import GroupPage from "../pages/GroupPage.jsx";
import Calendar from "./Calendar.jsx"
import "./Nav.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Nav(){

    return(
    
    <BrowserRouter>

      <nav className="nav-bar">
        <ul>
           <li><Link to="/Home" className="link">Home</Link></li> 
            <li><Link to="/GroupPages" className="link">Groups</Link></li>
            <li><Link to="/Calendar" className="link">Calendar</Link></li>
        </ul>
        
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/GroupPages" element={<GroupPage />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>

    </BrowserRouter>

    )

}

export default Nav;