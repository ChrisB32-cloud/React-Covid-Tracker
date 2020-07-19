import React from 'react';
// import React, { useState } from 'react';
const PopulateField = props => {
  const { state, positive, hospitalizedCurrently, death } = props.feilds;

  // console.log(props.feilds);
  // console.log(props);

  const CheckFields = () => {
    if (!state) {
      return <h1>Select State for details</h1>;
    } else {
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
