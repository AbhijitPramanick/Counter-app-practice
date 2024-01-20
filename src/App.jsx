import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [num, setNum] = useState(0);
  const handleIncrement = () => {
    setNum((p) => p + 1);
  };
  const handleDecrement = () => {
    setNum((p) => p - 1);
  };
  const handleReset = () => {
    setNum(0);
  };
  return (
    <div className="master flex_y">
      <div className="displayDiv flex_y">
        <p className="display flex">{num}</p>
        <div className="bgDisplay">{num}</div>
        <div className="btnBox flex">
          <button className="actionBtn green" onClick={handleIncrement}>
            Increment
          </button>
          <button className="actionBtn red" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="actionBtn blue" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
