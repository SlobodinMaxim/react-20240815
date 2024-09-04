import { Counter } from "../../../../couner/counter";
import { useCounter } from "../../../../couner/use-counter";
import { useAuthorization } from "../../../../authorization-context/use-authorization";
import styles from "./dish.module.css";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../../../redux/entities/dishes";

export const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { user } = useAuthorization();
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
