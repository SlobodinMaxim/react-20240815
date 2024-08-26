import { Counter } from "../../../../couner/counter";

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}

      <Counter initialValue={0} max={5} min={0} />
    </>
  );
};
