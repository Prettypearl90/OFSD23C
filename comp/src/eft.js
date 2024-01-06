import React, { useState, useEffect } from 'react';

function Clock() {
  // State for storing the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Effect to update the current time every second
  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up by clearing the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // The effect will run once after the initial render

  return (
    <div>
      <h2>Real-Time Clock</h2>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
