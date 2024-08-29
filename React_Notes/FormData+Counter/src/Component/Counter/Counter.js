import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function IncrementHandler() {
    setCounter(counter + 1);
  }

  function DecrementHandler() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>The Counter value is :{counter}</h1>
      <button onClick={IncrementHandler}>Increment by +1</button>
      <button onClick={DecrementHandler}>Decrement by +1</button>
    </div>
  );
}

export default Counter;
