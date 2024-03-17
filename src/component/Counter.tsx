import React, { useContext } from 'react'
import { CountContext, CounterContex } from '../context/CounterContextProvider';

const Counter = () => {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      Counter {count.value}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "INCRESE", payload: 10 })}>INCRESE</button>
      {/* <button onClick={() => setCount(count +1)}> Click</button> */}
    </div>
  );
}

export default Counter