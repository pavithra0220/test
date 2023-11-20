import React from 'react';
import { Chart } from 'primereact/chart';
import './piechart.css'

const PieChart = () => {
  const data = [
    { data: 100, label: 'Category A' },
    { data: 150, label: 'Category B' },
    { data: 200, label: 'Category C' },
  ];
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.data),
        backgroundColor: ['#FF5733', '#FFC300', '#FF5733'],
      },
    ],
  };

  const options = {
    legend: {
      position: 'bottom',

    },
  };

  return (
    <div className="pie-chart-container">
      <Chart type="pie" data={chartData} options={options} />
    </div>);
};

export default PieChart;
