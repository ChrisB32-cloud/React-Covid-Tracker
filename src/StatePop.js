import React, { useState } from 'react';
// import React from 'react';
import PopulateField from './PopulateField';

const StatePop = props => {
  const [covid, setCovid] = useState([]);
  const loopStates = props.results;

  const LoopTest = () => {
    return loopStates.map(st => (
      <option value={st.state} key={st.state}>
        {st.state}
      </option>
    ));
  };

  const GrabSt = e => {
    const stTarget = e.target.value;
    loopStates.map(state => {
      if (stTarget === state.state) {
        setCovid(state);
      }
    });
  };

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
