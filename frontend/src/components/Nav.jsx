import React from "react";
import Home from "../pages/Home";
import Groups from "../pages/GroupPage";
import Calendar from "./Calendar";
import "./Nav.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Nav(){

    return(
    
    <BrowserRouter>

      <nav className="nav-bar">
        <ul>
           <li><Link to="/Home">Home</Link></li> 
            <li><Link to="/GroupPages">Groups</Link></li>
            <li><Link to="/Calendar">Calendar</Link></li>
        </ul>
        
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/GroupPages" element={<Groups />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>

    </BrowserRouter>

    )

}

export default Nav;