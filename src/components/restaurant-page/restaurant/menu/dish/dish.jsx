import { Counter } from "../../../../couner/counter";
import { useCounter } from "../../../../couner/use-counter";
import { useUser } from "../../../../user-context/use-user";

import styles from "./dish.module.css";

export const Dish = ({ dish }) => {
  const { user } = useUser();
  const { decrement, increment, value } = useCounter(0, 0, 5);
  const { isAuthorized } = user;

  return (
    <>
      <span className={styles.title}>{dish.name}</span>

      {isAuthorized && (
        <Counter
          onDecrement={decrement}
          onIncrement={increment}
          value={value}
        />
      )}
    </>
  );
};
