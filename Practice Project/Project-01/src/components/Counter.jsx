import { useState } from 'react';

function Counter() {
  // Current count
  const [count, setCount] = useState(0);

  // History of counts
  const [history, setHistory] = useState([]);

  // Increment
  const increment = () => {
    setCount(prev => prev + 1);
    setHistory(prev => [...prev, count + 1]);
  };

  // Decrement
  const decrement = () => {
    setCount(prev => prev - 1);
    setHistory(prev => [...prev, count - 1]);
  };

  // Reset
  const reset = () => {
    setCount(0);
    setHistory(prev => [...prev, 0]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter</h2>
      <h3>Current Count: {count}</h3>

      {/* Buttons */}
      <button onClick={increment} style={{ margin: "5px" }}>+</button>
      <button onClick={decrement} style={{ margin: "5px" }}>-</button>
      <button onClick={reset} style={{ margin: "5px" }}>Reset</button>

      {/* History */}
      <div style={{ marginTop: "20px" }}>
        <h4>History:</h4>
        <ul>
          {history.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counter;