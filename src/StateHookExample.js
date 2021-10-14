import { useState } from 'react';

const StateHookExample = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const [step, setStep] = useState(count);

  return (
    <div>
      The count is: {count}
      <div>
        <button onClick={() => setCount(count + step)}>Increment</button>
        <button onClick={() => setCount(count - step)}>Decrement</button>
      </div>
      <div>
        The step is: {step}
        <div>
          <button onClick={() => setStep(step + 1)}>Increment step</button>
          <button onClick={() => setStep(step - 1)}>Decrement step</button>
        </div>
      </div>
    </div>
  );
};

export default StateHookExample;
