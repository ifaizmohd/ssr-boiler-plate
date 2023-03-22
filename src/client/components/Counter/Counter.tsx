import * as React from "react";

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Hi I'm Counter</h2>
      <button onClick={(e) => setCount(count - 1)}>{"-"}</button>
      <span>{count}</span>
      <button onClick={(e) => setCount(count + 1)}>{"+"}</button>
    </div>
  );
};

export default Counter;
