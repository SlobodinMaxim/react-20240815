import { Dish } from "./dish/dish";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>

      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </>
  );
};
