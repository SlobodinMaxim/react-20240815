import { useState } from "react";
import { Button } from "../../../button/button";
import { ReviewForm } from "./review-form/review-form";
import styles from "./reviews.module.css";
import { useUser } from "../../../user-context/use-user";

export const Reviews = ({ reviews }) => {
  const showFormState = useState(false);
  const [needShowForm, setNeedShowForm] = showFormState;
  const { user } = useUser();
  const { isAuthorized } = user;

  return (
    <>
      <h3>Отзывы</h3>

      <ul className={styles.list}>
        {reviews.map((review) => (
          <li className={styles.item} key={review.id}>
            {review.text}
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
