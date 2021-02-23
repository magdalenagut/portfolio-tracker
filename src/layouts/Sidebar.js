import React from "react";
import {NavLink, Link} from "react-router-dom";
import "../assets/scss/layouts/_sidebar.scss"
import {RiDashboardFill} from "react-icons/ri";
import {IoIosTrendingUp} from "react-icons/io";
import {IoIosWallet} from "react-icons/io";
import {IoIosSwap} from "react-icons/io";
import {IoMdCalculator} from "react-icons/io";
import {IoMdSettings} from "react-icons/io";
import {IoMdPaperPlane} from "react-icons/io";


const list = [
  {name: "Dashboard", path: "/", exact: "true", icon: <RiDashboardFill/>},
  {name: "Portfolio", path: "/porfolio", icon:<IoIosWallet/>},
  {name: "Transactions", path: "/transactions", icon:<IoIosSwap/>},
  {name: "Calculator", path: "/calculator", icon:<IoMdCalculator/>},
  {name: "Watchlist", path: "/wachlist", icon:<IoIosTrendingUp/>},
  {name: "News", path: "/news", icon:<IoMdPaperPlane/>},
  {name: "Settings", path: "/settings", icon:<IoMdSettings/>},
]

const Sidebar = () => {
 
  const menu = list.map(item => (

    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.icon}{item.name}</NavLink>
    </li>
  ))

  return (
    <>
    <div className="home">
        <Link to="/">Portfolio Tracker</Link>
    </div>
    <div className="sidebar">
        <ul>
          {menu}
        </ul>
    </div>
    </>
  );

};
 
export default Sidebar;
 