import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(null);

  const handleCountChange = (e) => {
    const n = parseInt(e.target.value) || 0;
    setCount(n);
    setNumbers(Array(n).fill(""));
  };

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const calculateSum = () => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += parseFloat(numbers[i]) || 0;
    }
    setSum(total);
  };

  return (
    <div className="App">
      <h2>Calculate Sum of N Numbers</h2>
      <label>Enter how many numbers (n): </label>
      <input type="number" min="1" onChange={handleCountChange} />
      <div>
        {numbers.map((num, index) => (
          <div key={index}>
            Number {index + 1}:{" "}
            <input
              type="number"
              value={num}
              onChange={(e) => handleNumberChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum !== null && <h3 className="result">Sum = {sum}</h3>}
    </div>
  );
};

export default App;
