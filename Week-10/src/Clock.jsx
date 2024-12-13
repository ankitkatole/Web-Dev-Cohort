import React, { useRef,useState } from 'react';

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Clock() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    setTime(c => c = 0);
  };

  return (
    <div>
      <h1 style={{margin:"10px"}}>Timer: {time}</h1>
      <button style={{margin:"10px"}} onClick={startTimer}>Start</button>
      <button style={{margin:"10px"}} onClick={stopTimer}>Stop</button>
      <button style={{margin:"10px"}} onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Clock;
