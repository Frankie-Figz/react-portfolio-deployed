import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Logo from "./logo-02.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={Logo} alt="logo" className="desktop-only logo"/>
          <NavLink
            exact 
            to="/"
            activeClassName="navbar__link--active"
            className="navbar__link"       
          >
            About Me
          </NavLink>

          <NavLink
            to="/portfolio"
            activeClassName="navbar__link--active"
            className="navbar__link"      
          >
            Portfolio
          </NavLink>
    </nav>
  );
}

export default Navbar;