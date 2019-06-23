import React, { useEffect } from "react";
import Chart from "chart.js";
import classes from "./bar.module.css";

const DownBar = ({ data, labels, bg, bc }) => {
  const chartRef = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels:
          labels.length === data.length
            ? labels
            : new Array(data.length).fill("Data"),
        datasets: [
          {
            label: false,
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(0, 188, 212, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(0, 188, 212, 1)"
            ],

            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          fontSize: 16,
          fontStyle: "bold",
          padding: 20,
          text: "Downtime Pareto Last 30 days"
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 80
              }
            }
          ]
        },
        elements: { point: { radius: 0 } }
      }
    });
  });
  return (
    <div className={classes.graphContainer}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default DownBar;
