import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const [step, setStep] = useState(1);

  return {
    count,
    increment: () => setCount(count + step),
    decrement: () => setCount(count - step),
    step,
    setStep,
  };
};

export default useCounter;
