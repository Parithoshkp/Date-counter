import { useState } from "react";
import "./app.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <div className="container">
        <span>Step</span>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      <div className="container">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="container">
        {count === 0 ? (
          <p>today is {date.toDateString()}</p>
        ) : count > 0 ? (
          <p>
            {count} days from today its {date.toDateString()}
          </p>
        ) : (
          <p>
            {-1 * count} days ago it was {date.toDateString()}
          </p>
        )}
      </div>
      <div className="container">
        {count > 0 ? <button onClick={handleReset}>Reset</button> : null}
      </div>
    </>
  );
}

export default App;
