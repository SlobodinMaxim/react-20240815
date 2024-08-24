import { Counter } from "../../../../couner/counter";

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}

      <Counter />
    </>
  );
};
