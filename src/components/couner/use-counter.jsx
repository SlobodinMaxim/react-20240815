import { useCallback, useState } from "react";

const DEFAULT_VALUE = 0;

export const useCounter = ({ initialValue, max, min, onChange }) => {
  const [value, setValue] = useState(initialValue ?? DEFAULT_VALUE);

  const validateValue = (value) => {
    return Math.min(
      Math.max(min ?? Number.MIN_VALUE, value),
      max ?? Number.MAX_VALUE
    );
  };

  const tryChangeValue = (oldValue, newValue) => {
    newValue = validateValue(newValue);
    if (newValue === oldValue) {
      return newValue;
    }
    if (typeof onChange === `function`) {
      onChange(newValue);
    }

    return newValue;
  };

  const decrement = useCallback(
    () => setValue((oldValue) => tryChangeValue(oldValue, oldValue - 1)),
    []
  );

  const increment = useCallback(
    () => setValue((oldValue) => tryChangeValue(oldValue, oldValue + 1)),
    []
  );

  return {
    currentValue: value,
    decrement,
    increment,
  };
};
