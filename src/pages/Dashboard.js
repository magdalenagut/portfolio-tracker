import React from "react";
import Card from "../components/Card";
import Linechart from "../components/Linechart";
import Assets from "../components/Assets";

function Dashboard() {
  return (
<>

          <div className="cards">
            <Card />
          </div>
          <div className="linechart">
           <Linechart /> 
          </div>
          <div className="assets">             
          <Assets />
          </div>
</>
  );
}

export default Dashboard;
