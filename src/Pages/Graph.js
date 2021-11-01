import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./graph.css";
Chart.register(ChartDataLabels);
const data = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022*"],
  datasets: [
    {
      label: "Companies Visited",
      data: [102, 89, 145, 112, 145, 36],
      backgroundColor: "rgb(51,85,139)",
      stack: "Stack 0",
    },
    {
      label: "No of offers",
      data: [561, 561, 662, 595, 608, 575],
      backgroundColor: "orange",
      stack: "Stack 1",
    },
  ],
};

const options = {
  plugins: {
    datalabels: {
      color: "black",
      anchor: "end",
      align: "top",
      weight: "bold",

      offset: 0,
    },
  },

  indexAxis: "x",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide

  responsive: true,

  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Graph = () => (
  <>
    <div class="graph">
      <Bar data={data} options={options} />
    </div>
  </>
);

export default Graph;
