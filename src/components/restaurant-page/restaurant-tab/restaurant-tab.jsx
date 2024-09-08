import { useSelector } from "react-redux";
import { Tab } from "../../tab/tab";
import { selectRestaurantById } from "../../../redux/entities/restaurants";

export const RestaurantTab = ({ activated, id, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return <Tab activated={true} name="Tab" />;
  }

  return <Tab activated={activated} name={restaurant.name} onClick={onClick} />;
};
