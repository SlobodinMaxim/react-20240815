export const Counter = ({ onDecrement, onIncrement, value }) => {
  return (
    <>
      <button onClick={onDecrement}>-</button>

      {value}

      <button onClick={onIncrement}>+</button>
    </>
  );
};
