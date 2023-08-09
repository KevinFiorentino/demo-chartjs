import React from 'react';
import Chart from 'chart.js/auto';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import PieChart from './components/PieChart';

export default function Home() {
  return (
    <div>
      <h1>
        Chart.js - <a href="https://www.chartjs.org/docs/latest/samples/information.html" target="_blank">Doc</a>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Doughnut</h2>
          <DoughnutChart />
        </div>
        <div>
          <h2>Pie</h2>
          <PieChart />
        </div>
        <div>
          <h2>Bar</h2>
          <BarChart />
        </div>
        <div>
          <h2>Line</h2>
          <LineChart />
        </div>
      </div>
    </div>
  );
}
