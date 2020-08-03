// import React from 'react';
import React from 'react';
import './ChartGraph.css';
import { configChart, formatDates } from './helper';
import { lineGraph } from './graphHelper';
import { Line, Bar } from 'react-chartjs-2';

// Think about putting the object in the return and using hooks
// to update the particular data we want to update

const ChartGraph = props => {
  const dataApi = props.resp;

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

  const positiveChartData = lineGraph(
    datesFormt,
    'Positive Cases in Us',
    testHelper,
    'rgba(255, 99, 132, 0.6)'
  );

  const MortalityChartData = lineGraph(
    datesFormt,
    'Mortality Rate in US',
    dthChart,
    'rgba(54, 162, 235, 0.6)'
  );

  return (
    <div className="charts-container">
      <Line data={positiveChartData} />
      <Line data={MortalityChartData} />
    </div>
  );
};

export default ChartGraph;
