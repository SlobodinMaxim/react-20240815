import { useState } from "react";
import { Restaurant } from "./restaurant/restaurant.jsx";
import styles from "./restaurant-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/index.js";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab.jsx";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

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
