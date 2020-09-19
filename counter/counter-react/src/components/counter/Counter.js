import React, { useState } from 'react';
import styles from './Counter.css';

export function Counter() {

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(2);

  const handleIncrement = () => {
    setCount(prevState => prevState+1);
    // console.log(count);
  };

  const handleDecrement = () => {
    setCount(prevState => prevState-1);
  };

  const handleIncrementByAmount = () => {
    setCount(prevState => prevState+amount);
  };

  const incrementAync = async () => {
    setTimeout(() => {
      handleIncrementByAmount();
    }, 1000);
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement} className="button">+</button>
        <span>{count}</span>
        <button onClick={handleDecrement} className="button">-</button>
      </div>
      <div>
        <input value={amount} onChange={event => setAmount(event.target.value)} />
        <button onClick={handleIncrementByAmount} className="button">add amount</button>
        <button onClick={incrementAync} className="asyncButton">add async</button>
      </div>
    </div>
  );
}