import { createContext, useState } from "react";
import ContextComponent from "./components/ContextComponent";

//Step 1: Create a Context
export const DataContext = createContext<UserInfo | null>(null);

export interface UserInfo {
  name: string;
  age: number;
  position: string;
}

function AppContext() {
  const [data, setData] = useState({
    name: "Blue Baney",
    age: 37,
    position: "Philosopher",
  });

  //Step 2: Create a Context Provider
  //Step 3: Wrap the App in the Provider
  return (
    <>
      <h2>State management with context</h2>
      <DataContext.Provider value={data}>
        <ContextComponent />
      </DataContext.Provider>
    </>
  );
}

export default AppContext;
