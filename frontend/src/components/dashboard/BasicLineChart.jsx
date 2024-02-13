import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const BasicLineChart = ({ animals }) => {
  console.log(animals.january);
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
      series={[
        {
          data: [
            animals.january,
            animals.february,
            animals.march,
            animals.april,
            animals.may,
            animals.june,
            animals.july,
            animals.august,
            animals.september,
            animals.october,
            animals.november,
            animals.december,
          ],
          color: "#760be0",
        },
      ]}
      min-width={350}
      max-width={550}
      height={300}
    />
  );
};

export default BasicLineChart;
