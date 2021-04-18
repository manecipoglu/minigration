import React from 'react';

import '../Styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="mainNavigation">
    <NavLink to="/home">
      <div className="mainNavigation__logo">
        <i className="fab fa-canadian-maple-leaf"></i>
        <h1>MINIGRATION</h1>
      </div>
    </NavLink>
    <nav className="mainNavigation__items">
      <ul>
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/immigration">IMMIGRATION</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
