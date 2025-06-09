import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const AppUseReducer = () => {
  const reducer = (state: { count: number }, action: Action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleClick = () => {
    dispatch({ type: "increment" });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <br />
      <p>Count: {state.count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default AppUseReducer;
