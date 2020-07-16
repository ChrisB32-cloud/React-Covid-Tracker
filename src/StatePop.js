import React from 'react';

const StatePop = props => {
  const loopStates = props.results;

  // function checkstatesFunc() {
  //   console.log(123);
  // }

  return (
    <div className="state-dropdown">
      <select>
        {loopStates.map(st => (
          <option value={st.state} key={st.state}>
            {st.state}
          </option>
        ))}
      </select>
      {/* <button onClick={checkstatesFunc}>Check State</button> */}
    </div>
  );
};

export default StatePop;
