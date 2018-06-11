/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav_container">
      <div className="nav_list">
        <li>
          <Link to="/" className="link"> Home </Link>
        </li>
      </div>
      <div className="nav_list">
        <li>
          <Link to="/schedule" className="link"> Schedule </Link>
        </li>
        <li>
          <Link to="/resources" className="link"> Resources </Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default Navbar;
