// import React from 'react';
import React, { useState } from 'react';
import PopulateField from './PopulateField';

const StatePop = props => {
  const [covid, setCovid] = useState([]);
  const loopStates = props.results;
  // let nextComponent = [];

  const LoopTest = () => {
    return loopStates.map(st => (
      <option value={st.state} key={st.state}>
        {st.state}
      </option>
    ));
  };

  function GrabSt(e) {
    const stTarget = e.target.value;
    loopStates.map(state => {
      if (stTarget === state.state) {
        setCovid(state);
        // console.log(state);
        // nextComponent.push(state);
      }
    });
    // return;
  }

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
