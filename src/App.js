import React, { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios';

import StatePop from './StatePop';
// import Chart from 'chart.js';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://covidtracking.com/api/v1/states/current.json'
      );
      setItems(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <StatePop results={items} />
    </div>
  );
};

export default App;
