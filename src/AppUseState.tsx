import React, { useState } from "react";

function AppUseState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h2>AppUseState</h2>
      <br />
      AppUseState: {count} <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default AppUseState;
