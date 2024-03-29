import React, { Component } from "react";
import classes from "./Dashboard.module.css";
import LineGraph from "./line";
import chartIcon from "./assets/chart-icon.svg";
import { managerData, nationalAverageData, yearLabels } from "./mockData";

export default class Dashboard extends Component {
  state = {
    data: managerData,
    average: nationalAverageData,
    labels: yearLabels
  };

  render() {
    const { data, average, labels } = this.state;
    return (
      <div className={classes.container}>
        <header>
          <img src={chartIcon} alt="bar chart icon" />
          <h1>Sales Dashboard</h1>
        </header>
        <LineGraph data={data} labels={labels} average={average} />
      </div>
    );
  }
}
