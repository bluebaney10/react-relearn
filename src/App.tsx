/* import ListGroup from "./components/ListGroup";
import ListUser from "./components/ListUser";
import TodoList from "./components/TodoList"; */
import ReducerCounter from "./components/ReducerCounter";
import TodoHook from "./components/TodoHook";
import { createContext, useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleItem = (item: string) => {
    console.log("item:", item);
  };

  return (
    <>
      <ReducerCounter />
      {/* 
       <TodoHook />
       <TodoList />
      <ListGroup items={items} onSelectItem={handleItem} />
      <ListUser /> */}
    </>
  );
}

export default App;
