import { Counter } from "../../../couner/counter";

export const Dish = ({ dish }) => {
  return (
    <li>
      {dish.name}

      <Counter />
    </li>
  );
};
