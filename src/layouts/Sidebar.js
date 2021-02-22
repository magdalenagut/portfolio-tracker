import React from "react";
import {NavLink} from "react-router-dom";
import "../assets/scss/layouts/_sidebar.scss"
import {MdDashboard} from "react-icons/md";

const list = [
  {name: "Dashboard", path: "/", exact: "true", icon: <MdDashboard/>},
  {name: "Portfolio", path: "/porfolio", icon:<MdDashboard/>},
  {name: "Transactions", path: "/transactions", icon:<MdDashboard/>},
  {name: "Calculator", path: "/calculator", icon:<MdDashboard/>},
  {name: "Watchlist", path: "/wachlist", icon:<MdDashboard/>},
  {name: "News", path: "/news", icon:<MdDashboard/>},
  {name: "Settings", path: "/settings", icon:<MdDashboard/>},
]

const Sidebar = () => {
 
  const menu = list.map(item => (

    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.icon}{item.name}</NavLink>
    </li>
  ))

  // const icon = list.map(item => (
  //   <div key={item.name}>
  //     {item.icon}
  //   </div>
  // ))

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
 