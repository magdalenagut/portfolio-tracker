import React from "react";
import "../assets/scss/portfolio-tracker.scss";
import Card from "../components/Card";
import Linechart from "../components/Linechart";
import Assets from "../components/Assets";

function Dashboard() {
  return (
    <div className="content">

          <div className="cards">
            <Card />
          </div>

          <Linechart />                  
          <Assets />
    </div>
  );
}

export default Dashboard;
