import React from 'react';
// import StatePop from './StatePop';
const PopulateField = props => {
  const { state, positive, hospitalizedCurrently, death } = props.feilds;

  const CheckFields = () => {
    if (!state) {
      return <h1>Select State for details</h1>;
    } else {
      console.log('value changed to: ', state);
      return (
        <div>
          <h1>State: {state} </h1>
          <h2>Positive: {positive} </h2>
          <h2>Hospitalized :{hospitalizedCurrently}</h2>
          <h2>Deaths: {death} </h2>
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
