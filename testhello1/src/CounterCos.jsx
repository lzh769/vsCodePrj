import React, { useState } from 'react';

const CounterCos = () => {
  const [count5, setCount] = useState(0); // 使用 useState

  const increment = () => {
    setCount(count5 + 1);
  };

  return (
    <div>
      <p>9當前計數: {count5}</p>
      <button onClick={increment }>增加</button>
      <button onClick={() =>setCount(count5 + 1)}>2增加</button>
    </div>
  );
};

export default CounterCos;