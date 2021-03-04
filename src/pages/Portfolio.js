import React from "react";
import "../assets/scss/portfolio-tracker.scss";
import Wallet from "../components/Wallet";

function Portfolio() {
 
    return (
      <div className="content">
         <div className="wallets">
        <Wallet/>
        </div>
      </div>
       );
 };
 
 export default Portfolio;
 