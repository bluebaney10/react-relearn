import { createContext, useState } from "react";
export const DataContext = createContext();

import Context from "./components/Context";

function AppContext() {
  const [data, setData] = useState({
    name: "Blue Baney",
    age: 37,
    position: "Philosopher",
  });

  return (
    <>
      <DataContext.Provider value={data}>
        <Context />
      </DataContext.Provider>
    </>
  );
}

export default AppContext;
