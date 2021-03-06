import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/scss/portfolio-tracker.scss";
import { RiDashboardFill } from "react-icons/ri";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import { IoIosSwap } from "react-icons/io";
import { IoMdCalculator } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";

const list = [
  { name: "Dashboard", path: "/", exact: "true", icon: <RiDashboardFill /> },
  { name: "Portfolio", path: "/porfolio", icon: <IoIosWallet /> },
  { name: "Transactions", path: "/transactions", icon: <IoIosSwap /> },
  { name: "Calculator", path: "/calculator", icon: <IoMdCalculator /> },
  { name: "Watchlist", path: "/wachlist", icon: <IoIosTrendingUp /> },
  { name: "News", path: "/news", icon: <IoMdPaperPlane /> },
  { name: "Settings", path: "/settings", icon: <IoMdSettings /> },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showHamburger = () => setHamburger(!hamburger);

  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        <p>
          {" "}
          {item.icon}
          {item.name}
        </p>
      </NavLink>
    </li>
  ));

  return (
    <>
      <div
        className={hamburger ? "hamburger toggle" : "hamburger"}
        onClick={() => {
          showSidebar();
          showHamburger();
        }}
      >
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </div>

      <div className="transparent">
        <div className={sidebar ? "sidebar toggle" : "sidebar"}>
          <div className="list">
            <div className="home">
              <Link to="/">
                <p>Portfolio Tracker</p>
              </Link>
            </div>
            <ul>{menu}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
