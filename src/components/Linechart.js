import "../assets/scss/portfolio-tracker.scss";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "portfolio",
          data: [31, 60, 30, 80, 60, 80, 100],
        },
      ],
      options: {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#3eaef4"],
          width: "3",
        },
        xaxis: {
          type: "date",
          categories: [
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
            "2018-09-19",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },

        fill: {
          colors: ["#3eaef4"],
        },
      },
    };
  }

  render() {
    return (
      <>
        <div className="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </>
    );
  }
}

export default Linechart;
