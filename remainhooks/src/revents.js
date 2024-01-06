import React, { useState } from 'react';

const EventEx = () => {
  const [message, setMessage] = useState(' ');

  // Event handler function
  const handleClick = () => {
    setMessage('Welcome to All!');
  };

  // Another event handler function
  const handleInputChange = (e) => {
    setMessage(`Hello ${e.target.value}`);
  };

  return (
    <div>
      <h2>{message}</h2>
      {/* Button with a click event */}
      <button onClick={handleClick}>Greetings</button>

      {/* Input with a change event */}
      <input
        type="text"
        placeholder="Type something"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default EventEx;
