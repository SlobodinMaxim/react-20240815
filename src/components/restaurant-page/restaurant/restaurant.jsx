import { Menu } from "./menu/menu";
import { Reviews } from "./reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>

      <Menu menu={restaurant.menu} />

      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
