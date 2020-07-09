import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import './App.css';

async function fetchData() {
  const response = await axios.get(
    'https://covidtracking.com/api/v1/states/current.json'
  );
  console.log(response.data);
}

fetchData();
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
