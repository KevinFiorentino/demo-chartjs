'use client'    // This is important !!!

import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Active users',
        data: [30, 45, 60, 50, 70],
        backgroundColor: '#5282FD',
        borderColor: '#5282FD',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Inactive users',
        data: [15, 20, 20, 30, 40],
        backgroundColor: '#FF92AE',
        borderColor: '#FF92AE',
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  return <Chart type='line' data={data} />;
};

export default LineChart;
