import { useState } from "react";
import { Restaurant } from "./restaurant/restaurant.jsx";
import styles from "./restaurant-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/index.js";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab.jsx";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
import { useRequest } from "../../redux/hooks/use-request.jsx";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../redux/entities/request/request-statuses.js";
import { Loader } from "../loader/loader.jsx";

export const RestaurantPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const isLoading = requestStatus === IDLE || requestStatus == PENDING;
  const isError = requestStatus === REJECTED;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return null;
  }

  return (
    <>
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
    </>
  );
};
