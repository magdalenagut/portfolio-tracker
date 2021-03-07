import React from "react";
import {Link } from "react-router-dom";

function Footer() {
 
    return (
      <div className="footer">
        <p className="footer__text">
          © 2021 Portfolio Tracker made by mgut
        </p>
        
      <Link to="/">
      FAQ
      </Link>
      </div>
      
       );
 };
 
 export default Footer;
 