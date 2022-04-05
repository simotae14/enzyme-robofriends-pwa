import React, { useState } from 'react';

const CounterButtonMemo = ({ color }) => {
  console.log('Counter memo');
  const [count, setCount] = useState(1);
  return (
    <button
      id='counter'
      color={color}
      onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default React.memo(CounterButtonMemo);
