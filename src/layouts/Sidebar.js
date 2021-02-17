import React from "react";
import {NavLink} from "react-router-dom";

function Sidebar() {
 
    return (
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/porfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/transactions">Transactions</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/wachlist">Watchlist</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      );
};
 
export default Sidebar;
 