import React from 'react';

const StatePop = props => {
  const loopStates = props.results;

  return (
    <div>
      {loopStates.map(state => (
        <p>{state.state}</p>
      ))}
    </div>
  );
};

export default StatePop;
