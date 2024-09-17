import { useState } from "react";
import { Button } from "../../../button/button";
import { ReviewForm } from "./review-form/review-form";
import styles from "./reviews.module.css";
import { useAuthorization } from "../../../authorization-context/use-authorization";
import { Review } from "./review/review";
import { useRequest } from "../../../../redux/hooks/use-request";
import { getReviewsByRestaurantId } from "../../../../redux/entities/reviews/get-reviews-by-restaurant-id";
import {
  PENDING,
  REJECTED,
} from "../../../../redux/entities/request/request-statuses";
import { Loader } from "../../../loader/loader";

export const Reviews = ({ restaurantId, reviewIds }) => {
  const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);
  const { user } = useAuthorization();
  const showFormState = useState(false);

  const isLoading = requestStatus === PENDING;
  const isError = requestStatus === REJECTED;

  const { isAuthorized } = user;
  const [needShowForm, setNeedShowForm] = showFormState;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return null;
  }

  return (
    <>
      <h3>Отзывы</h3>

      <ul className={styles.list}>
        {reviewIds.map((reviewId) => (
          <li className={styles.item} key={reviewId}>
            <Review id={reviewId} />
          </li>
        ))}
      </ul>

      {isAuthorized && (
        <Button onClick={() => setNeedShowForm(true)}>Добавить отзыв</Button>
      )}

      <ReviewForm showFormState={showFormState} />
    </>
  );
};
