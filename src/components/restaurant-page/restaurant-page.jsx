import { useEffect, useState } from "react";
import { Restaurant } from "./restaurant/restaurant.jsx";
import styles from "./restaurant-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/index.js";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab.jsx";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
import { useRequest } from "../../redux/hooks/use-request.jsx";
import { useLoader } from "../loader-context/use-loader.jsx";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../redux/entities/request/request-statuses.js";

export const RestaurantPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);
  const { hide, show } = useLoader(false);

  const isLoading = requestStatus === IDLE || requestStatus == PENDING;
  const isFulfilled = requestStatus === FULFILLED;
  const isError = requestStatus === REJECTED;

  useEffect(() => {
    if (isLoading) {
      show();
    }

    if (isError || isFulfilled) {
      hide();
    }
  }, [isLoading, isFulfilled, isError]);

  if (isLoading || isError) {
    return (
      <div className={styles.restaurant_page}>
        <RestaurantTab />
        <Restaurant />
      </div>
    );
  }

  return (
    <div className={styles.restaurant_page}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTab
          activated={restaurantId === activeRestaurantId}
          id={restaurantId}
          key={restaurantId}
          onClick={() => setActiveRestaurantId(restaurantId)}
        />
      ))}

      <Restaurant id={activeRestaurantId} />
    </div>
  );
};
