'use client'    // This is important !!!

import React from 'react';
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Usuarios activos',
        data: [30, 45, 60, 50, 70],
        backgroundColor: [
          '#5282FD',
          '#FF92AE',
          '#FF5722',
          '#572ded',
          '#FFCD56',
        ],
        borderColor: 'white',
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default DoughnutChart;
