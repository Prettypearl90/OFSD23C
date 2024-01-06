import React, { useState, useEffect } from 'react';
import './index.css'

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className='divmain'>
      {data ? (
        
        <div className='divmain'>
          {data.map(item => (
          
            
           
                <div className='div'>
                <img height='200px' width='200px' src={item.image}>
                </img> <p>{item.title}</p>
                <p>{item.description}</p>
                </div>
        
          ))}
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
     </div>

    // <div>
    //   {data ? (
    //     <ul>
    //       {data.map(item => (
    //         <li key={item.id}>{item.title}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
  );
}

export default MyComponent;
