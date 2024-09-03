import { Dish } from "./dish/dish";

import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Меню</h3>

      <ul className={styles.list}>
        {menu.map((dish) => (
          <li className={styles.item} key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
