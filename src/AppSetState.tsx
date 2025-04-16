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

  const [firstName, setFirstName] = useState("Blue");
  const [lastName, setLastName] = useState("Baney");

  // Calculate fullName dynamically
  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      {count1} num of count 1<button onClick={increment1}>+</button>
      <br></br>
      {count2} num of count 2<button onClick={increment2}>+</button>
      <br></br>
      Hello, {fullName}
      <button
        onClick={() => {
          setFirstName("Buncha");
        }}
      >
        Change name
      </button>
    </>
  );
}

export default AppSetState;
