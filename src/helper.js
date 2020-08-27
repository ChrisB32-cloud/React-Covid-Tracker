function configChart(data, passApi) {
  // console.log(data);
  const testData = data
    .filter((item, idx) => {
      if (idx % 3 === 0) {
        if (item[passApi] === null) {
          return (item[passApi] = 1);
        }
        return item[passApi];
      }
    })
    .map((filt) => {
      // return filt.positive;
      return filt[passApi];
    });
  return testData;
}

function formatDates(formatArr) {
  const dates = formatArr.map((d) => {
    const fix = d.toString().slice(4, 8);
    const newFix = fix.slice(0, 2) + '-' + fix.slice(2);
    return newFix;
  });
  return dates;
}
function increaceRateFormula(data, pos, dth, recov) {
  const formulaResults = data
    .map((item, idx) => {
      if (idx % 3 === 0) {
        let res = item[pos] - item[dth] - item[recov];
        if (res === 0) {
          return (res = 1);
        }
        return res;
      }
    })
    .filter((d) => {
      return d;
    });
  return formulaResults;
}

export { configChart, formatDates, increaceRateFormula };
