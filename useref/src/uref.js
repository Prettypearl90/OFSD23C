import React, { useRef, useEffect } from 'react';

export default function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" ref={inputRef} />
    </div>
  );
}

 
