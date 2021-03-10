import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(false);
  const [list, setList] = useState(false);
  const showUser = () => setUser(!user);
  const showList = () => setList(!list);

  return (
    <div className="navbar">
      <div
        className={user ? "user toggle" : "user"}
        onClick={() => {
          showUser();
          showList();
        }}
      >
        <CgProfile />
      </div>

      <div className={list ? "list toggle" : "list"}>
        <ul
          onClick={() => {
            showUser();
            showList();
          }}
        >
          <Link to="#">
            <li>
              <p>Log out</p>
              </li>
            
            </Link>
       
          <Link to="/help">
            <li>
              <p>Help</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
