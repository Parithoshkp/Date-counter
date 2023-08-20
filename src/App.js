import { useState } from "react";
import "./app.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="container">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step is: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="container">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count is: {count}</p>
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
    </>
  );
}

export default App;
