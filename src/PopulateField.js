import React from 'react';
// import StatePop from './StatePop';
const PopulateField = (props) => {
  const { state, positive, hospitalized, death } = props.feilds;

  const mortRatePre = (death / positive) * 100;
  const mortRate = mortRatePre.toFixed(2);

  const CheckFields = () => {
    if (!state) {
      return <h1>Select State for details</h1>;
    } else {
      // console.log('value changed to: ', state);
      return (
        <div>
          <h1>State: {state} </h1>
          <h2>Positive: {positive} </h2>
          <h2>Hospitalized :{hospitalized === null ? 'N/A' : hospitalized}</h2>
          <h2>Deaths: {death} </h2>
          <h2>Mortality: {mortRate}% </h2>
        </div>
      );
    }
  };

  const ShowStateData = () => {
    return <CheckFields />;
  };
  return <ShowStateData />;
};

export default PopulateField;
