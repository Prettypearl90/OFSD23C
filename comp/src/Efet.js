//  To fetch and display data from a public API:


import React, { useState, useEffect } from 'react';



function RandomDogImage() {
  // State for storing the URL of a random dog image
  const [dogImage, setDogImage] = useState('');

  // Effect to fetch a random dog image when the component mounts
  useEffect(() => {
    // Function to fetch a random dog image
    const fetchRandomDogImage = async () => {
      try {
        // Fetch a random dog image from the Dog API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Update the component state with the fetched image URL
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    // Call the fetchRandomDogImage function
    fetchRandomDogImage();
  }, []); // The effect will run once after the initial render

  return (
    <div>
      <h2>Random Dog Image</h2>
      {dogImage && <img src={dogImage} alt="Random Dog" />}
    </div>
  );
}

export default RandomDogImage;
