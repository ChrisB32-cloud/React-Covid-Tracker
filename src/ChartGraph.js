// import React from 'react';
import React from 'react';
import './ChartGraph.css';
import { Line } from 'react-chartjs-2';

// Think about putting the object in the return and using hooks
// to update the particular data we want to update

const ChartGraph = props => {
  const dataApi = props.resp;

  // console.log(dataApi);

  const posChartFilter = dataApi.filter((pst, idx) => {
    if (idx % 5 === 0) {
      return pst.positive;
    }
  });

  const posChartData = posChartFilter.map(filt => {
    return filt.positive;
  });

  const posChartFiltDates = dataApi.filter((pst, idx) => {
    if (idx % 5 === 0) {
      return pst.date;
    }
  });

  const posDates = posChartFiltDates.map(filt => {
    return filt.date;
  });

  const chartData = {
    labels: posDates,
    datasets: [
      {
        label: 'Positive Cases in Us',
        data: posChartData,
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

  return (
    <div className="charts-container">
      <Line data={chartData} />
      {/* <Line /> */}
    </div>
  );
};

export default ChartGraph;
