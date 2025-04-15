import React, { useContext } from "react";
import { DataContext } from "../AppContext";

const Context = () => {
  const userInfo = useContext(DataContext);

  return (
    <div>
      UseContext Example
      <hr />
      <h3>User info</h3>
      <p>Name: {userInfo.name}</p>
      <p>Name: {userInfo.age}</p>
      <p>Name: {userInfo.position}</p>
    </div>
  );
};

export default Context;
