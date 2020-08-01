// import React from 'react';
import React from 'react';
import './ChartGraph.css';
import { configChart, configChartDates, configChartDth } from './helper';
import { Line } from 'react-chartjs-2';

// Think about putting the object in the return and using hooks
// to update the particular data we want to update

const ChartGraph = props => {
  const dataApi = props.resp;

  // console.log(dataApi);

  const testHelper = configChart(dataApi);
  const chartDates = configChartDates(dataApi);
  const dthChart = configChartDth(dataApi);

  const chartData = {
    labels: chartDates,
    datasets: [
      {
        label: 'Positive Cases in Us',
        // data: posChartData,
        data: testHelper,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ],
        borderWidth: 3
      }
    ]
  };

  const mortData = {
    labels: chartDates,
    datasets: [
      {
        label: 'Mortality in Us',
        data: dthChart,
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ],
        borderWidth: 3
      }
    ],
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              // try with 0 value and uncomment min
              beginAtZero: true
              // min: 0
            }
          }
        ]
      }
    }
  };

  return (
    <div className="charts-container">
      <Line data={chartData} />
      <Line data={mortData} />
      {/* <Line /> */}
    </div>
  );
};

export default ChartGraph;
