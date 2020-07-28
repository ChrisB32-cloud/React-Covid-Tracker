// import React from 'react';
import React, { useState } from 'react';
import PopulateField from './PopulateField';

const StatePop = props => {
  const [covid, setCovid] = useState([]);
  const loopStates = props.results;

  // Need to try using asycn to avoid using state again

  const loopTest = () => {
    // console.log('hello');
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

  return (
    <div className="state-dropdown">
      <select onChange={e => GrabSt(e)}>
        {loopTest()}
        // //
      </select>

      <PopulateField feilds={covid} />
    </div>
  );
};

export default StatePop;
