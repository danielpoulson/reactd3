import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
// Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, average, labels } = this.props;

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels:
          labels.length === data.length
            ? labels
            : new Array(data.length).fill("Data"),
        datasets: [
          {
            label: "Sales",
            fill: false,
            borderColor: "#6610f2",
            data: data
          },
          {
            label: "National Average",
            data: average,
            fill: false,
            borderColor: "#E0E0E0"
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
  }
  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
