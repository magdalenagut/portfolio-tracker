import React from "react";
import "../assets/scss/portfolio-tracker.scss";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Assets from "../components/Assets";

function Dashboard() {
  return (
    <div className="content">

          <div className="cards">
            <Card />
          </div>
          <Chart />
          <Assets />

    </div>
  );
}

export default Dashboard;
