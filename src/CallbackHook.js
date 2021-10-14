import { useCallback, useState } from 'react';

const CallbackHook = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const [step, setStep] = useState(count);

  const handleDecrementClick = useCallback(
    () => setCount((count) => count - step),
    [step]
  );

  return (
    <div>
      The count is: {count}
      <div>
        <button onClick={() => setCount(count + step)}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
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

export default CallbackHook;
