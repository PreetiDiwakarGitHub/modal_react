import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for DigitalClock component

function DigitalClock({ filterTasks }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="DigitalClock">
      <div className="clock">{time.toLocaleTimeString()}</div>
      
    </div>
  );
}

export default DigitalClock;
