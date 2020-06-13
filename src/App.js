import React, { useState, useEffect } from "react";
import "./App.css";

import HighCharts from "./components/HighCharts";
import Map from "./components/Map";

function App() {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      chart: {
        type: "bar",
      },
      title: {
        text: "Test",
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6],
        },
      ],
    });
  }, []);

  const handleSelect = (e) => {
    setOptions({
      chart: {
        type: e.target.value,
      },
      title: {
        text: "Test",
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6],
        },
      ],
    });
  };
  return (
    <div className="App">
      <HighCharts options={options} constructorType={"chart"} />
      <select name="" id="" onChange={handleSelect}>
        <option value="bar">Bar</option>
        <option value="area">Area</option>
        <option value="spline">Spline</option>
      </select>
      <Map />
    </div>
  );
}

export default App;
