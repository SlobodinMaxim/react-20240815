import { Counter } from "../couner/counter";
import classNames from "classnames";

import styles from "./counter-line.module.css";

export const CounterLine = ({ onDecrement, onIncrement, title, value }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>

      <Counter
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        value={value}
      />
    </div>
  );
};
