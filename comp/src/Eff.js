import React, { useState, useEffect } from 'react';

function EventListenerComponent() {
  // State to track the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to add event listener when the component mounts
  useEffect(() => {
    // Event listener callback function
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // The effect will run once after the initial render

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}

export default EventListenerComponent;
