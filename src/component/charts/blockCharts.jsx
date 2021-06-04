import React from "react";
import { Line } from "react-chartjs-2";

const BlockCharts = (props) => {
  const labels = [
    "2 June",
    "4 June",
    "6 June",
    "8 June",
    "10 June",
    "12 June",
    "14 June",
    "16 June",
    "18 June",
    "20 June",
    "22 June",
    "24 June",
    "26 June",
    "28 June",
    "30 June",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Filter Data Set",
        backgroundColor: "var(--secondaryColor)",
        borderColor: "var(--secondaryColor)",
        data: [
          0, 10, 15, 22, 20, 30, 45, 30, 45, 54, 22, 10, 3, 4, 3, 10, 45, 22,
          20, 10, 45, 10, 12, 53, 22, 20, 30, 45,
        ],
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default BlockCharts;
