import { useState } from "react";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Please leave feedback</h1>

      <div> 
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      <h2>Statistics</h2>

      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positive}%</p>
        </div>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
}
