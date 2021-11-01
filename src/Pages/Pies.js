import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const state = {
  labels: [
    "CSE",
    "ISC",
    "ECE",
    "ETE",
    "EIE",
    "EEE",
    "IEM",
    "CIV",
    "MECH",
    "MCA",
    "MBA",
  ],
  datasets: [
    {
      backgroundColor: [
        "#800000",
        "#e6194B",
        "#f58231",
        "#ffe119",
        "#bfef45",
        "#3cb44b",
        "#42d4f4",
        "#911eb4",
        "#f032e6",
        "#fabed4",
        "#aaffc3",
      ],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [124, 51, 20, 12, 12, 10, 4, 2, 10, 15, 2],
    },
  ],
};

export default class Pies extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Pie
            data={state}
            options={{
              responsive: true,
              maintainAspectRatio: true,

              title: {
                display: true,
                text: "Branch wise Placements",
                fontSize: 20,
                weight: "bold",
              },
              legend: {
                display: true,
                position: "left",
              },
            }}
          />
        </div>
        <br />
      </div>
    );
  }
}
