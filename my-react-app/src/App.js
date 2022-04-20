import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.method(props.value + 1)}>{props.label}</button>
  );
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  if (total > 0) {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine
          text="average"
          value={(props.good - props.bad) / total}
        />
        <StatisticLine
          text="positive"
          value={(props.good / total) * 100 + " %"}
        />
      </>
    );
  }
  return <p>No feedback given</p>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button method={setGood} value={good} label="good" />
      <Button method={setNeutral} value={neutral} label="neutral" />
      <Button method={setBad} value={bad} label="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
