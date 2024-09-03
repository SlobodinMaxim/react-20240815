import { Button } from "../button/button";

import styles from "./counter.module.css";

export const Counter = ({ onDecrement, onIncrement, value }) => {
  return (
    <div className={styles.root}>
      <Button displayType="counter" onClick={onDecrement}>
        -
      </Button>

      {value}

      <Button displayType="counter" onClick={onIncrement}>
        +
      </Button>
    </div>
  );
};
