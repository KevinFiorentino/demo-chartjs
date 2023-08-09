'use client'    // This is important !!!

import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Messages',
        data: [15, 35, 10, 10, 20],
        backgroundColor: '#5282FD',
        borderColor: '#5282FD',
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={data} />;
};

export default BarChart;
