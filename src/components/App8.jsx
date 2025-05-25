import React from "react";
import { useState } from "react";
const[count, setCount] = useState(0);
const increment = () => {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
};
export default function App8() {
    return (
        <div>
        <h1>App8</h1>
            <h2>useState Revision</h2>
            <h3>{count}</h3>
            <p>
        <button onClick={increment}>click</button>
           </p>
        </div>
    );
    }