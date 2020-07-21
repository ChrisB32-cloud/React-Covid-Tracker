// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartGraph = props => {
  const data = props.resp;
  const [posChartData, setPosDataChart] = useState({});
  // const [chartPosDatTest, setChartPosDatTest] = useState([]);

  const posChart = data.filter((t, idx) => {
    if (idx % 20 === 0) {
      const retPos = t.positive;
      return retPos;
    }
  });

  let accum = [];
  const chTs = data.forEach((t, idx) => {
    if (idx % 20 === 0) {
      accum.push(t.positive);
    }
  });
  // setChartPosDatTest(posChart);
  // console.log(posChart);
  console.log(accum);

  const chart = () => {
    setPosDataChart({
      labels: ['12', '13', '24', '76', '54', '54', '54', '53', '43', '54'],
      // data: {
      datasets: [
        {
          label: 'Positive Cases in Us',
          // data: [1, 2, 39, 78, 55, 21],
          // data: [
          //   2,
          //   17,
          //   470,
          //   42169,
          //   533837,
          //   1108510,
          //   1582955,
          //   1997360,
          //   2627744,
          //   3813916
          // ],
          data: accum,
          backgroundColor: ['rgba(34,0,65,0.5)']
        },
        {
          label: 'Positive Cases in France',
          // data: [3, 4, 5, 9, 7, 76],
          backgroundColor: ['rgba(34,65,65,0.5)']
        }
      ]
      // options: {
      //   responsive: true,
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           max: 4000000,
      //           min: 0,
      //           stepSize: 100000
      //         }
      //       }
      //     ]
      //   }
      // }
      // labels: ['12', '13', '24', '76', '54'],
      // fontColor: 'rgb(166, 171, 179)'
      // },
      // options: {
      //   scales: {
      //     yAxes: [
      //       {
      //         scaleLabel: {
      //           display: true,
      //           labelString: 'Y text',
      //           ticks: {
      //             max: 4000000,
      //             min: 0,
      //             stepSize: 100000
      //           }
      //         }
      //       }
      //     ]
      //   }
      // }
    });
  };

  useEffect(() => {
    chart();
  }, []);

  // console.log(chartHosp);

  return (
    <div>
      <h1> testing Charts</h1>
      <Line data={posChartData} />
    </div>
  );
};

export default ChartGraph;
