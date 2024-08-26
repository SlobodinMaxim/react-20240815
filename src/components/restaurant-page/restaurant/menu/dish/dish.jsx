import { Counter } from "../../../../couner/counter";
import { useCounter } from "../../../../couner/use-counter";

export const Dish = ({ dish }) => {
  const { decrement, increment, value } = useCounter(0, 0, 5);

  return (
    <>
      {dish.name}

      <Counter onDecrement={decrement} onIncrement={increment} value={value} />
    </>
  );
};
