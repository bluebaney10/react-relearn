import { useContext } from "react";
import { DataContext } from "../AppContext";

const ContextComponent = () => {
  const userInfo = useContext(DataContext);

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
