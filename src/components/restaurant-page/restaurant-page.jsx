import { useState } from "react";
import { Restaurant } from "./restaurant/restaurant.jsx";
import styles from "./restaurant-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/index.js";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab.jsx";

export const RestaurantPage = () => {
  const ids = useSelector(selectRestaurantIds);
  const [activeId, setActiveId] = useState(ids[0]);

  return (
    <div className={styles.restaurant_page}>
      {ids.map((id) => (
        <RestaurantTab
          activated={id === activeId}
          id={id}
          key={id}
          onClick={() => setActiveId(id)}
        />
      ))}

      <Restaurant id={activeId} />
    </div>
  );
};
