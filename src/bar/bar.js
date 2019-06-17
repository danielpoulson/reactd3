import React, { useEffect } from "react";
import Chart from "chart.js";
import classes from "./bar.module.css";

const Bar = ({ data, labels, lean }) => {
  const chartRef = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    let bg;
    bg = data.map(d => {
      if (d < 45) {
        return "#FF80AB";
      } else {
        return "#B2FF59";
      }
    });
    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels:
          labels.length === data.length
            ? labels
            : new Array(data.length).fill("Data"),
        datasets: [
          {
            label: "% OEE",
            data: data,
            backgroundColor: bg,
            borderColor: bg,
            borderWidth: 1
          },
          {
            label: "Target",
            data: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45],
            fill: false,
            borderColor: "#FF0000",

            // Changes this dataset to become a line
            type: "line",
            borderWidth: 1
          }
        ]
      },
      options: {
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

export default Bar;
