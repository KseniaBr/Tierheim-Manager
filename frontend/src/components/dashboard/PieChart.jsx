import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dogs, cats, rodents, birds, other }) => {
  const data = {
    labels: ["Hunde", "Katzen", "Nagetiere", "Vögel", "Sonstiges"],
    datasets: [
      {
        label: "Anzahl",
        data: [dogs, cats, rodents, birds, other],
        backgroundColor: [
          "#fef08a",
          "#d9f99d",
          "#a5f3fc",
          "#e9d5ff",
          "#fecaca",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};

export default PieChart;
