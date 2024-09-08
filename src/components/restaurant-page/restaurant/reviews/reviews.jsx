import { useEffect, useState } from "react";
import { Button } from "../../../button/button";
import { ReviewForm } from "./review-form/review-form";
import styles from "./reviews.module.css";
import { useAuthorization } from "../../../authorization-context/use-authorization";
import { Review } from "./review/review";
import { useRequest } from "../../../../redux/hooks/use-request";
import { getReviews } from "../../../../redux/entities/reviews/get-reviews";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../../../redux/entities/request/request-statuses";
import { useLoader } from "../../../loader-context/use-loader";

export const Reviews = ({ reviewIds }) => {
  const requestStatus = useRequest(getReviews);
  const { user } = useAuthorization();
  const showFormState = useState(false);
  const { hide, show } = useLoader();

  const isLoading = requestStatus === IDLE || requestStatus === PENDING;
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

  const { isAuthorized } = user;
  const [needShowForm, setNeedShowForm] = showFormState;

  if (isLoading || isError) {
    return null;
  }

  if (isFulfilled || isError)
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
