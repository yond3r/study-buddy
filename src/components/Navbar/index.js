import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul id= "nav">
                <li className="study">
                    <Link to = "/study">Study Guides!</Link>
                </li>
                <li className="breakTime">
                    <Link to= "/BreakTime">Break Time!</Link>
                </li>
            </ul>
        </nav>
    )};

export default Navbar;