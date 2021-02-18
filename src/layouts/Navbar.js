import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Portfolio Tracker</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      );
};
 
export default Navbar;
 