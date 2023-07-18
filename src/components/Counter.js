import React from "react";
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const { value, showCount } = counter;
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(counterActions.increment());
  };

  const increaseCount = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementCount = () => {
    dispatch(counterActions.decrement());
  };
  const resetCount = () => {
    dispatch(counterActions.reset());
  };
  const toggleCount = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div className="counter">
      <h1>Counter Board</h1>
      {showCount && <p className="value">{value}</p>}

      <button onClick={incrementCount} disabled={value > 15}>
        Increment
      </button>
      <button onClick={increaseCount} disabled={value > 25}>
        Increase by 10
      </button>
      <button onClick={decrementCount} disabled={value === 0}>
        Decrement
      </button>
      <button onClick={resetCount} disabled={!showCount}>
        Reset
      </button>
      <button onClick={toggleCount}>Toggle</button>
    </div>
  );
};

export default Counter;
