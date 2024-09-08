import { useSelector } from "react-redux";
import { selectReviewById } from "../../../../../redux/entities/reviews";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return <>{review.text}</>;
};
