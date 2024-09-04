import { Dish } from "./dish/dish";

import styles from "./menu.module.css";

export const Menu = ({ dishIds }) => {
  return (
    <div className={styles.root}>
      <h3>Меню</h3>

      <ul className={styles.list}>
        {dishIds.map((id) => (
          <li className={styles.item} key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
