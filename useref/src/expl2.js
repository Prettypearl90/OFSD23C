//Measure and Display Input Length 

import React, { useRef, useState } from 'react';

export default function InputLengthCounter() {
  const inputRef = useRef();
  const [inputLength, setInputLength] = useState(0);

  const handleInputChange = () => {
    setInputLength(inputRef.current.value.length);
  };

  return (
    <div>
      <label htmlFor="message">Message: </label>
      <input type="text" id="message" ref={inputRef} onChange={handleInputChange} />
      <p>Input length: {inputLength}</p>
    </div>
  );
}


