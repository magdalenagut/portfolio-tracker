import React from "react";
import {NavLink} from "react-router-dom";
import "../assets/scss/layouts/_sidebar.scss"

const list = [
  {name: "Dashboard", path: "/"},
  {name: "Portfolio", path: "/porfolio"},
  {name: "Transactions", path: "/transactions"},
  {name: "Calculator", path: "/calculator"},
  {name: "Watchlist", path: "/wachlist"},
  {name: "News", path: "/news"},
  {name: "Settings", path: "/settings"},
]

function Sidebar() {
 
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ))

  return (
    <>
    <div className="sidebar">
        <ul>
        {menu}
        </ul>
    </div>
    </>
  );
};
 
export default Sidebar;
 