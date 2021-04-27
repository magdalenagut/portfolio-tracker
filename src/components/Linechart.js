import "../assets/scss/portfolio-tracker.scss";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ChartData from "../data/ChartData";

class Linechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
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
            "2015-09-19",
            "2016-09-19",
            "2017-09-19",
            "2018-09-19",
            "2019-09-19",
            "2020-09-19",
            "2021-09-19",
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

  componentDidMount() {
    this.setState({series: ChartData});
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
