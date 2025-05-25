import React, { useState } from "react";

export default function App9() {

  const [count, setCount] = useState(10);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
        <div>
        <h1>App9</h1>
            <h2>useState Revision</h2>
            <h3>{count}</h3>
            <p>
        <button onClick={increment}>increment</button>
         <button onClick={decrement} style={{ marginLeft: "10px" }}>decrement</button>
           </p>
        </div>
    );
}
