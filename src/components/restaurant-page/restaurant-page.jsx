import { useState } from "react";
import { restaurants } from "../../../materials/mock.js";
import { Restaurant } from "./restaurant/restaurant.jsx";
import { Tab } from "../tab/tab.jsx";

export const RestaurantPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div>
      <div>
        {restaurants.map((restaurant) => (
          <Tab
            disabled={restaurant === activeRestaurant}
            key={restaurant.id}
            name={restaurant.name}
            onClick={() => setActiveRestaurant(restaurant)}
          />
        ))}
      </div>

      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
