import React, { useState, useCallback,useMemo } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const [count1, setCount1] = useState(0);

  const handleIncrement = useCallback(() => {
    alert('useCallback');
    setCount(count + 1);
  }, [count]);
 
//   const handleIncrement = () => { 
//     setCount(count + 1);
//   };
   const i=0;
 const expensiveCalculation = useMemo(() => {
    
    alert('执行昂贵的计算'+(i+1));
    // count1= count1 * 1000000;
    //  setCount1(count1);
   return  count1 * 1000000  ;
  }, [count1]);

  return (
    <div>
      <p>当前计数: {count}</p> <p>Big计数: {count1}</p>
      <p>计算结果: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>
        1点击计算结果
      </button>
     <button onClick={() => setCount1(count1+1)}>
        2点击计算结果
      </button>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
//   console.log('ChildComponent 渲染');
// alert('ChildComponent 渲染');
  return (
    <button onClick={onIncrement}>
      3点击我
    </button>
  );
}

export default ParentComponent;