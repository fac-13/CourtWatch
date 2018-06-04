import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/schedule"> Schedule </Link>
      </li>
      <li>
        <Link to="/resources"> Resources </Link>
      </li>
    </ul>
  </nav>
);
=======
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
>>>>>>> ba9931e16fbbe26f01bcf49ed1f30fed4c4ae262

export default Navbar;
