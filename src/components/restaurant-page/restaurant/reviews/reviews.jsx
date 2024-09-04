import { useState } from "react";
import { Button } from "../../../button/button";
import { ReviewForm } from "./review-form/review-form";
import styles from "./reviews.module.css";
import { useAuthorization } from "../../../authorization-context/use-authorization";
import { Review } from "./review/review";

export const Reviews = ({ reviewIds }) => {
  const showFormState = useState(false);
  const [needShowForm, setNeedShowForm] = showFormState;
  const { user } = useAuthorization();
  const { isAuthorized } = user;

  return (
    <>
      <h3>Отзывы</h3>

      <ul className={styles.list}>
        {reviewIds.map((id) => (
          <li className={styles.item} key={id}>
            <Review id={id} />
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
