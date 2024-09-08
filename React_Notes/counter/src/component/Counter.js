import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
  function IncreaseCount() {
      setCount(count + 1);
      document.body.style.backgroundColor="red"
    }
    function DecreaseCount() {
        setCount(count - 1);
        document.body.style.backgroundColor="blue"
    }
    function ResetCount() {
        setCount(0);
        document.body.style.backgroundColor="steelblue"
  }
  return (
    <>
      <div>Counter value is {count}</div>
      <button onClick={() => { IncreaseCount();
        }}>
        Click me to Increase
      </button>

      <button  onClick={() => {
          DecreaseCount();
        }} > Click  me   to   Decrease
      </button>

      <button  onClick={() => {
          ResetCount();
        }}
      >
        {" "}
        Reset to 0
      </button>
    </>
  );
};

export default Counter;
