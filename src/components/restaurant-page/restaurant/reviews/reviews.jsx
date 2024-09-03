import { ReviewForm } from "./review-form/review-form";

import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
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

      <ReviewForm />
    </>
  );
};
