import "../assets/scss/portfolio-tracker.scss";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'portfolio',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      ],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'date',
          categories: ["2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      },
    
    
    };
  }
  
  render() {
    return (
<div className="linechart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="100%"
            height="100%"
          />
  </div>
    );
  }
}

export default Linechart;
