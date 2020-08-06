function lineGraph(datesLables, chartLable, chartData, lineColor) {
  const graphData = {
    labels: datesLables,
    datasets: [
      {
        label: chartLable,
        data: chartData,
        backgroundColor: [
          `${lineColor}`,
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ],
        borderWidth: 3
      }
    ]
    // options: {
    //   scales: {
    //     xAxes: [
    //       {
    //         ticks: {
    //           // try with 0 value and uncomment min
    //           fontColor: 'blue',
    //           beginAtZero: true,
    //           min: 0
    //           // color: 'blue'
    //         }
    //       }
    //     ]
    //   },
    //   legend: {
    //     labels: {
    //       fontColor: 'red'
    //     }
    //   }
    // }
  };

  return graphData;
}

export { lineGraph };
