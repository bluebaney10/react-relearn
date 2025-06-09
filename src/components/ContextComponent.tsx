import { useContext } from "react";
import { DataContext } from "../AppContext";

const ContextComponent = () => {
  const userInfo = useContext(DataContext);
  // Step 4: Consume the Context in Components
  // (A) Read Context Data using useContext Hook
  // (B) Updating the State in Context
  return (
    <div>
      <h3>User info</h3>
      <p>Name: {userInfo?.name}</p>
      <p>Name: {userInfo?.age}</p>
      <p>Name: {userInfo?.position}</p>
    </div>
  );
};

export default ContextComponent;
