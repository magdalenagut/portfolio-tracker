import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/scss/portfolio-tracker.scss";
import SidebarData from '../data/SidebarData';


const Sidebar = () => {
  const [transparent, setTransparent] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const showTransparent = () => setTransparent(!transparent);
  const showHamburger = () => setHamburger(!hamburger);

  const menu = SidebarData.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        <p>
          {/* {" "} */}
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
          showTransparent();
          showHamburger();
        }}
      >
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </div>

      <div className={transparent ? "transparent toggle" : "transparent"}>
        <div className="sidebar">
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
