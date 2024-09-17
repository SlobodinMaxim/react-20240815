import { Dish } from "./dish/dish";
import styles from "./menu.module.css";
import { useRequest } from "../../../../redux/hooks/use-request";
import { getDishesByRestaurantId } from "../../../../redux/entities/dishes/get-dishes-by-restaurant-id";
import {
  PENDING,
  REJECTED,
} from "../../../../redux/entities/request/request-statuses";
import { Loader } from "../../../loader/loader";

export const Menu = ({ dishIds, restaurantId }) => {
  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const isLoading = requestStatus === PENDING;
  const isError = requestStatus === REJECTED;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h3>Меню</h3>

      <ul className={styles.list}>
        {dishIds.map((dishId) => (
          <li className={styles.item} key={dishId}>
            <Dish id={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
