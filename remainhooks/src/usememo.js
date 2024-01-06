import React, { useState, useMemo } from 'react';

const FactorialCalculator = ({ number }) => {
  // Expensive factorial calculation
  const calculateFactorial = (num) => {
    console.log(`Calculating factorial for ${num}...`);
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  };

  // Memoize the result of the factorial calculation
  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <p>Factorial of {number}: {factorialResult}</p>
    </div>
  );
};

const App = () => {
  const [inputNumber, setInputNumber] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
      />
      <FactorialCalculator number={inputNumber} />
    </div>
  );
};

export default App;
