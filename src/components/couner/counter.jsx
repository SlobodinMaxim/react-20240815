import { useCounter } from "./use-counter";

export const Counter = ({ max, min, onChange, value }) => {
  const { decrement, increment, currentValue } = useCounter({
    initialValue: value,
    max,
    min,
    onChange,
  });

  return (
    <>
      <button onClick={decrement}>-</button>

      {currentValue}

      <button onClick={increment}>+</button>
    </>
  );
};
