import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div className="menu_area">
      <ul className="navbar">
        <li className="nav-item">
          <NavLink to="/">Insert</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/update">update</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/find">Find</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/remove">Remove</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
