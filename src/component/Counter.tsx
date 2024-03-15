import React, { useContext } from 'react'
import { CounterContex } from '../context/CounterContextProvider';

const { count, setCount } = useContext(CouterContext);
console.log(count); //count: 10
const Counter = () => {
  return (
    <div>
      Counter {count}
      <button onClick={() => setCount(count +1)}> Click</button>
    </div>
  )
}

export default Counter