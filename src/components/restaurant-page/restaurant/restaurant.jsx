import classNames from "classnames";
import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";
import styles from "./restaurant.module.css";
import { useTheme } from "../../theme-context/use-theme";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { theme } = useTheme();

  if (!restaurant) {
    return null;
  }

  const { menu: dishIds, reviews: reviewIds } = restaurant;

  return (
    <div className={classNames(styles.root, styles[theme])}>
      <Menu dishIds={dishIds} restaurantId={id} />

      <Reviews restaurantId={id} reviewIds={reviewIds} />
    </div>
  );
};
