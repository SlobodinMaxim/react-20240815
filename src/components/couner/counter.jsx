import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const validateValue = (value) => {
    return Math.min(5, Math.max(0, value));
  };

  return (
    <>
      <button onClick={() => setValue(validateValue(value - 1))}>-</button>

      {value}

      <button onClick={() => setValue(validateValue(value + 1))}>+</button>
    </>
  );
};
