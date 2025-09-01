import React, { useState } from 'react';

const CounterCos = () => {
  const [count, setCount] = useState(0); // 使用 useState

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>當前計數: {count}</p>
      <button onClick={increment}>增加</button>
    </div>
  );
};

export default CounterCos;