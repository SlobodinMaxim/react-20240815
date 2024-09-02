import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";

import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  const menu = restaurant.menu;
  // .map((item) => Array(100).fill(item))
  // .flat(1)
  // .map((item, index) => ({ ...item, id: `${item.id}-${index}` }));
  const reviews = restaurant.reviews;
  // .map((item) => Array(100).fill(item))
  // .flat(1)
  // .map((item, index) => ({ ...item, id: `${item.id}-${index}` }));

  return (
    <div className={styles.root}>
      {/* <h2>{restaurant.name}</h2> */}

      <Menu menu={menu} />

      <Reviews reviews={reviews} />
    </div>
  );
};
