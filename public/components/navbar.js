import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <div className="nav_list">
                <li><Link to={'/'}> Home </Link></li>
                </div>
                <div className="nav_list">
                <li><Link to={'/schedule'}> Schedule </Link></li>
                <li><Link to={'/resources'}> Resources </Link></li>
                </div>
            </ul>
        </nav>
    )
};

export default Navbar; 
