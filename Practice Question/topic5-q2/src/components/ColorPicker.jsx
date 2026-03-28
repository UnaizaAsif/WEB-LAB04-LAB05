import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, padding: "40px" }}>
      <h2>Pick a Color</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
}

export default ColorPicker;