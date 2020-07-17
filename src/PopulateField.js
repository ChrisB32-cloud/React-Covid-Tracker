import React from 'react';

const PopulateField = props => {
  const { state, positive, hospitalizedCurrently, death } = props.feilds;
  const ShowStateData = () => {
    return (
      <div>
        <h1>State: {state} </h1>
        <h2>Positive: {positive} </h2>
        <h2>Hospitalized :{hospitalizedCurrently}</h2>
        <h2>Deaths: {death} </h2>
      </div>
    );
  };
  return <ShowStateData />;
};

export default PopulateField;
