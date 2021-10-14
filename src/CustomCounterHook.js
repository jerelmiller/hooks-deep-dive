import useCounter from './hooks/useCounter';

const CustomCounterHook = ({ initialValue = 0 }) => {
  const { count, increment, decrement, step, setStep } =
    useCounter(initialValue);

  return (
    <div>
      The count is: {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
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

export default CustomCounterHook;
