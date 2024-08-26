import { useCallback, useState } from "react";

const DEFAULT_VALUE = 0;

const validateValue = (value, min, max) => {
  return Math.min(
    Math.max(min ?? Number.MIN_VALUE, value),
    max ?? Number.MAX_VALUE
  );
};

export const useCounter = (initialValue, min, max) => {
  const [value, setValue] = useState(initialValue ?? DEFAULT_VALUE);

  const decrement = useCallback(
    () => setValue((oldValue) => validateValue(oldValue - 1, min, max)),
    []
  );

  const increment = useCallback(
    () => setValue((oldValue) => validateValue(oldValue + 1, min, max)),
    []
  );

  return {
    decrement,
    increment,
    value,
  };
};
