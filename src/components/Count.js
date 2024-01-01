import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increemnet":
      return state + 1;
    case "decreement":
      return state - 1;
    default:
      return state;
  }
};
export default function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="m-3">
      <h1>here is your count: {count}</h1>
      <div className="flex ">
        <button
          onClick={() => dispatch("increemnet")}
          className="py-3 px-5 bg-black text-sm text-white"
        >
          increement
        </button>
        <button
          onClick={() => dispatch("decreement")}
          className="py-3 px-5 bg-black text-sm text-white"
        >
          decreement
        </button>
      </div>
    </div>
  );
}
