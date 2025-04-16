import { createContext, useState } from "react";
import ContextComponent from "./components/ContextComponent";
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
