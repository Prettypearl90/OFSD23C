
import React from 'react';
import { useState } from 'react';

// Custom hook: useToggle
const useToggle = (initialState = false) => {
  // State and function to toggle the state
  const [value, setValue] = useState(initialState);

  // Function to toggle the value
  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  // Return the state value and the toggle function
  return [value, toggle];
};

// Example usage of the custom hook
const ToggleComponent = () => {
  // Using the custom hook to manage a boolean state
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <p>Toggle state: {isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleComponent;
