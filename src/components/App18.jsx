import React, { useState } from "react";

function App18() {
  const [score, setScore] = useState(1);
  const [outs, setOuts] = useState(0);
  const [status, setStatus] = useState("");

  const addRun = () => {
    if (outs < 11) {
      setScore(prev => prev + 1);
      setStatus("Nice shot!");
    }
  };

  const addWicket = () => {
    if (outs < 11) {
      const newOuts = outs + 1;
      setOuts(newOuts);
      if (newOuts === 11) {
        setStatus("All out! Match finished.");
      } else {
        setStatus("Oops! That's a wicket.");
      }
    }
  };

  return (
    <div>
      <h2>Live Cricket Match</h2>
      <div>
        <button onClick={addRun}>Add Run</button>
        <button onClick={addWicket}>Add Wicket</button>
      </div>
      <div>
        <p>Total Runs: {score}</p>
        <p>Total Wickets: {outs}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default App18;
