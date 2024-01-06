import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  // State for managing the title
  const [title, setTitle] = useState('React useEffect Example');

  // Effect to update the document title when the "title" state changes
  useEffect(() => {
    document.title = title;
  }, [title]); // The effect will run whenever the "title" state changes

  // Function to update the title
  const updateTitle = () => {
    const newTitle = prompt('Enter a new title:');
    if (newTitle) {
      setTitle(newTitle);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={updateTitle}>Update Title</button>
    </div>
  );
}

export default TitleUpdater;
