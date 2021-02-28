import React from "react";
import "../assets/scss/portfolio-tracker.scss";
import Card from "../components/Card";


function Dashboard() {
 
    return (
          <div className="content">
                <div className="cards"><Card /></div>
                <div className="chart"></div>
                <div className="assets"></div>
          </div>
       );
 };
 
 export default Dashboard;
 