function lineGraph(datesLables, chartLable, chartData, color) {
  const graphData = {
    labels: datesLables,
    datasets: [
      {
        label: chartLable,
        data: chartData,
        backgroundColor: [
          `${color}`,
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

  return graphData;
}

export { lineGraph };
