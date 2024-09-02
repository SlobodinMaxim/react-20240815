import { Counter } from "../../../../couner/counter";
import { useCounter } from "../../../../couner/use-counter";

import styles from "./dish.module.css";

export const Dish = ({ dish }) => {
  const { decrement, increment, value } = useCounter(0, 0, 5);

  return (
    <>
      <span className={styles.title}>{dish.name}</span>

      <Counter onDecrement={decrement} onIncrement={increment} value={value} />
    </>
  );
};
