import React, { useReducer } from "react";
function generateRandomNumber(length) {
  // Make sure the length is a positive integer
  length = Math.floor(Math.abs(length));

  // Calculate the range for the random number
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  // Generate a random number within the specified range
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}
const initialState = {
  counter: 0,
  color: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increement":
      return { counter: state.counter + 1 };
    case "decreement":
      return { counter: state.counter - 1 };
    case "add":
      return { color: action.value };
    case "rev":
      return { color: state.color - 10 };
    default:
      return { counter: state.counter };
  }
};

export default function ComplexCount() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="m-3">
      <h2>Complex Count</h2>
      <h1>here is your count: {count.counter}</h1>
      <div className="flex ">
        <button
          onClick={() =>
            dispatch({
              type: "increement",
            })
          }
          className="py-3 px-5 bg-black text-sm text-white"
        >
          increement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decreement",
            })
          }
          className="py-3 px-5 bg-black text-sm text-white"
        >
          decreement
        </button>
      </div>
      <div className={`bg-[#${count.color}] w-[100px] h-[100px] mt-4`}></div>
      <button
        onClick={() =>
          dispatch({
            type: "add",
            value: generateRandomNumber(6),
          })
        }
        className="py-3 px-5 bg-black text-sm text-white mt-3"
      >
        Change Background color
      </button>
    </div>
  );
}
