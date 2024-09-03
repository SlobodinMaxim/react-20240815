import classNames from "classnames";
import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";
import styles from "./restaurant.module.css";
import { useTheme } from "../../theme-context/use-theme";

export const Restaurant = ({ restaurant }) => {
  const { theme } = useTheme();

  const menu = restaurant.menu;
  const reviews = restaurant.reviews;

  return (
    <div className={classNames(styles.root, styles[theme])}>
      <Menu menu={menu} />

      <Reviews reviews={reviews} />
    </div>
  );
};
