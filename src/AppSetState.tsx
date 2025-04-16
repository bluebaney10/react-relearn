import React, { useState } from "react";

function AppSetState() {
  const [count1, setCount1] = useState(0);
  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const [count2, setCount2] = useState(0);
  const increment2 = () => {
    setCount2((prevcount) => prevcount + 1);
  };

  return (
    <>
      {count1} num of count 1<button onClick={increment1}>+</button>
      <br></br>
      {count2} num of count 2<button onClick={increment2}>+</button>
    </>
  );
}

export default AppSetState;
