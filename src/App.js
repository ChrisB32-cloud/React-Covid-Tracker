import React, { useState, useEffect } from 'react';
import img1 from './img1.jpg';
import axios from 'axios';
import StatePop from './StatePop';
import ChartGraph from './ChartGraph';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [chartItems, setChartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.covidtracking.com/v1/states/current.json'
      );
      // console.log(response.data);
      setItems(response.data);
    };

    const fetchChartData = async () => {
      const results = await axios.get(
        'https://api.covidtracking.com/v1/us/daily.json'
      );
      // console.log(results.data);
      const passData = await results.data;
      // console.log(passData.reverse());

      setChartItems(passData.reverse());
    };

    fetchChartData();
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <div className="app-title">
          <h1>Covid-19 Tracker (React.js)</h1>
          <StatePop results={items} key="i" />
          <ChartGraph resp={chartItems} />
        </div>
      </div>
    </div>
  );
};

export default App;
