import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, filterjoon, increment } from "../Features/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.x);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(filterjoon())}
        >
          Increment
        </button>
        <span>
          {count.map((x) => {
           return <div key={x.id}>{x.id}</div>;
          })}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
