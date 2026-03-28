import { useState } from 'react';
import ConversionHistory from './components/ConversionHistory';

function App() {
  const [temp, setTemp] = useState('');
  const [scale, setScale] = useState('C'); // C or F
  const [history, setHistory] = useState([]);

  // Conversion logic
  const convert = () => {
    if (temp === '') return;

    let result;
    if (scale === 'C') {
      result = (parseFloat(temp) * 9/5 + 32).toFixed(2) + " °F";
    } else {
      result = ((parseFloat(temp) - 32) * 5/9).toFixed(2) + " °C";
    }

    // Update history
    setHistory([...history, `${temp} °${scale} → ${result}`]);
  };

  const handleReset = () => {
    setTemp('');
    setHistory([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Temperature Converter</h2>

      <input 
        type="number" 
        value={temp} 
        onChange={(e) => setTemp(e.target.value)} 
        placeholder="Enter temperature"
      />

      <select value={scale} onChange={(e) => setScale(e.target.value)}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>

      <br /><br />
      <button onClick={convert}>Convert</button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>Reset</button>

      <h3>Conversion History:</h3>
      <ConversionHistory history={history} />
    </div>
  );
}

export default App;