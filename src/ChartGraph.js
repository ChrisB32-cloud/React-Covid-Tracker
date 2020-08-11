// import React from 'react';
import React from 'react';
import './ChartGraph.css';
import { configChart, formatDates, increaceRateFormula } from './helper';
import { lineGraph } from './graphHelper';
import { Line } from 'react-chartjs-2';

// Think about putting the object in the return and using hooks
// to update the particular data we want to update

const ChartGraph = props => {
  const dataApi = props.resp;
  // console.log(dataApi);

  const filterValue = {
    positive: 'positive',
    negative: 'negative',
    recovered: 'recovered',
    date: 'date',
    death: 'death'
  };

  const testHelper = configChart(dataApi, filterValue.positive);
  const chartDates = configChart(dataApi, filterValue.date);
  const dthChart = configChart(dataApi, filterValue.death);
  const datesFormt = formatDates(chartDates);
  // const recoveredData = configChart(dataApi, filterValue.recovered);

  const increaseFormula = increaceRateFormula(
    dataApi,
    filterValue.positive,
    filterValue.death,
    filterValue.recovered
  );
  // console.log(dthChart);
  // console.log(increaseFormula);

  const positiveChartData = lineGraph(
    datesFormt,
    'Positive Cases in Us',
    testHelper,
    'rgba(255, 99, 132, 0.5)'
  );

  const mortalityChartData = lineGraph(
    datesFormt,
    'Mortality Rate in US',
    dthChart,
    'rgba(54, 162, 235, 0.5)'
  );

  const increaseChartData = lineGraph(
    datesFormt,
    'Increase in Us',
    increaseFormula,
    'rgba(255, 206, 86, 0.5)'
  );

  return (
    <div className="charts-container">
      <div className="posChart">
        <Line data={positiveChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="dthChart">
        <Line data={mortalityChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="incChart">
        <Line data={increaseChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
    </div>
  );
};

export default ChartGraph;
