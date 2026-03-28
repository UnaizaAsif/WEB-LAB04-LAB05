import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This is some text 👀</p>}
    </div>
  );
}

export default ToggleText;