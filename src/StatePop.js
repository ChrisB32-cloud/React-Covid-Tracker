// import React from 'react';
import React, { useState } from 'react';
import PopulateField from './PopulateField';

const StatePop = props => {
  const [covid, setCovid] = useState([]);
  const loopStates = props.results;

  // Need to try using asycn to avoid using state again
  // let nextComponent = [];
  // console.log(props.results);

  const LoopTest = () => {
    return loopStates.map(st => (
      <option value={st.state} key={st.state}>
        {st.state}
      </option>
    ));
  };

  function GrabSt(e) {
    e.preventDefault();
    const stTarget = e.target.value;
    loopStates.map(state => {
      if (stTarget === state.state) {
        setCovid(state);
      }
    });
  }

  // console.log(nextComponent);

  return (
    <div className="state-dropdown">
      <select onChange={e => GrabSt(e)}>
        <LoopTest />
      </select>

      {/* <button>Check State</button> */}
      <PopulateField feilds={covid} />
    </div>
  );
};

export default StatePop;
