// import React from 'react';
import React from 'react';
import './ChartGraph.css';
import { configChart, formatDates, increaceRateFormula } from './helper';
import { lineGraph } from './graphHelper';
import { Line } from 'react-chartjs-2';

// Think about putting the object in the return and using hooks
// to update the particular data we want to update

const ChartGraph = (props) => {
  const dataApi = props.resp;
  // console.log(dataApi);

  const filterValue = {
    positive: 'positive',
    positiveIncrease: 'positiveIncrease',
    negative: 'negative',
    recovered: 'recovered',
    hospitalized: 'hospitalized',
    hospitalizedCurrently: 'hospitalizedCurrently',
    date: 'date',
    death: 'death',
    deathIncrease: 'deathIncrease',
    inIcuCumulative: 'inIcuCumulative',
    inIcuCurrently: 'inIcuCurrently',
  };

  const positiveTot = configChart(dataApi, filterValue.positive);
  const positiveChange = configChart(dataApi, filterValue.positiveIncrease);
  const hospitalizedTot = configChart(dataApi, filterValue.hospitalized);
  const hospitalizedCurr = configChart(
    dataApi,
    filterValue.hospitalizedCurrently
  );
  const chartDates = configChart(dataApi, filterValue.date);
  const dthChart = configChart(dataApi, filterValue.death);
  const dthChange = configChart(dataApi, filterValue.deathIncrease);
  const icuTot = configChart(dataApi, filterValue.inIcuCumulative);
  const icuCurr = configChart(dataApi, filterValue.inIcuCurrently);
  const datesFormt = formatDates(chartDates);
  // const recoveredData = configChart(dataApi, filterValue.recovered);

  // console.log(dthChart);
  // console.log(positiveTot);

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
    positiveTot,
    'rgba(255, 99, 132, 0.5)'
  );
  const positiveChangeChartData = lineGraph(
    datesFormt,
    'Daily Change in positive Cases in Us',
    positiveChange,
    'rgba(200, 200, 132, 0.5)'
  );

  const mortalityChartData = lineGraph(
    datesFormt,
    'Mortality in US',
    dthChart,
    'rgba(54, 162, 235, 0.5)'
  );
  const mortalityChangeChartData = lineGraph(
    datesFormt,
    'Daily Mortality in US',
    dthChange,
    'rgba(54, 162, 200, 0.5)'
  );

  const increaseChartData = lineGraph(
    datesFormt,
    'New Cases per Day in Us',
    increaseFormula,
    'rgba(255, 206, 86, 0.5)'
  );
  const hospChartData = lineGraph(
    datesFormt,
    'Hospitalized Total in Us',
    hospitalizedTot,
    'rgba(255, 180, 100, 0.5)'
  );
  const hospChangeChartData = lineGraph(
    datesFormt,
    'Hospitalized Current in Us',
    hospitalizedCurr,
    'rgba(255, 180, 1, 0.5)'
  );

  return (
    <div className="charts-container">
      <div className="posChart">
        <Line data={positiveChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="posChartChange">
        <Line data={positiveChangeChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="dthChart">
        <Line data={mortalityChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="dthChartChange">
        <Line data={mortalityChangeChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="hospChart">
        <Line data={hospChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      <div className="hospChartChange">
        <Line data={hospChangeChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div>
      {/* <div className="incChart">
        <Line data={increaseChartData} />
        <h3>Source: The COVID Tracking Project</h3>
      </div> */}
    </div>
  );
};

export default ChartGraph;
