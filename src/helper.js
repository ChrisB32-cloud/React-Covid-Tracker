function configChart(data) {
  //   console.log(_apiItem);
  const testData = data
    .filter((item, idx) => {
      if (idx % 5 === 0) {
        return item.positive;
      }
    })
    .map(filt => {
      return filt.positive;
    });

  return testData;
}

function configChartDates(data) {
  const charDates = data
    .filter((item, idx) => {
      if (idx % 5 === 0) {
        return item.date;
      }
    })
    .map(filt => {
      return filt.date;
    });

  return charDates;
}

function configChartDth(data) {
  const charDatesDth = data
    .filter((item, idx) => {
      if (idx % 5 === 0) {
        if (item.death === null) {
          return (item.death = 1);
        }
        return item.death;
      }
    })
    .map(filt => {
      return filt.death;
    });

  return charDatesDth;
}

export { configChart, configChartDates, configChartDth };
