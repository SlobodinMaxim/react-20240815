import { useState } from "react";
import { restaurants } from "../../../materials/mock.js";
import { Restaurant } from "./restaurant/restaurant.jsx";
import { Tab } from "../tab/tab.jsx";
import styles from "./restaurant-page.module.css";

export const RestaurantPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Tab
          disabled={restaurant === activeRestaurant}
          key={restaurant.id}
          name={restaurant.name}
          onClick={() => setActiveRestaurant(restaurant)}
        />
      ))}

      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
