import React, { useContext } from 'react'
import Counterco

const { count, setCount } = useContext(CouterContext);
const Counter = () => {
  return (
      <div>{ count}</div>
  )
}

export default Counter