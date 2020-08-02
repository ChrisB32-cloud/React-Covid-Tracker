// import React from 'react';
import React from 'react';
import './ChartGraph.css';
import { configChart, formatDates } from './helper';
import { Line } from 'react-chartjs-2';

// Think about putting the object in the return and using hooks
// to update the particular data we want to update

const ChartGraph = props => {
  const dataApi = props.resp;

  // let _su = ['positive'];
  const filterValue = {
    positive: 'positive',
    negative: 'negative',
    date: 'date',
    death: 'death'
  };

  const testHelper = configChart(dataApi, filterValue.positive);
  const chartDates = configChart(dataApi, filterValue.date);
  const dthChart = configChart(dataApi, filterValue.death);

  const datesFormt = formatDates(chartDates);

  const chartData = {
    labels: datesFormt,
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
    labels: datesFormt,
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
              beginAtZero: true,
              min: 0
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
