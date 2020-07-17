import React from 'react';

const StatePop = props => {
  const loopStates = props.results;

  const loopTest = loopStates.map(st => (
    <option value={st.state} key={st.state}>
      {st.state}
    </option>
  ));

  // const testingSt = loopTest.map(t => {
  //   console.log(t.props.value);
  // });
  const GrabSt = e => {
    loopTest.map(t => {
      const grSt = t.props.value;
    });
    // console.log(e.target.value);
  };

  return (
    <div className="state-dropdown">
      <select>
        {/* {loopStates.map(st => (
          <option value={st.state} key={st.state}>
            {st.state}
          </option>
        ))} */}
        {/* <LoopTest onClick={loopStates} /> */}
        {loopTest}
      </select>
      <button onClick={GrabSt}>Check State</button>
    </div>
  );
};

export default StatePop;
