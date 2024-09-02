import { Button } from "../../../../button/button";
import { TextLine } from "../../../../text-line/text-line";
import { useReviewForm } from "./use-review-from";

import styles from "./review-form.module.css";
import { CounterLine } from "../../../../counter-line/counter-line";
import { useState } from "react";

export const ReviewForm = () => {
  const { clear, decrementRating, form, incrementRating, setName, setText } =
    useReviewForm();
  const { name, rating, text } = form;

  const [isClosed, setIsClosed] = useState(false);

  return isClosed ? (
    <></>
  ) : (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h3>Оставить отзыв</h3>
            <Button
              className={styles.close}
              displayType="close"
              onClick={() => setIsClosed(true)}
            >
              x
            </Button>
          </div>

          <div className={styles.body}>
            <TextLine
              className={styles.item}
              onChange={setName}
              title="Name"
              value={name}
            />

            <TextLine
              className={styles.item}
              onChange={setText}
              title="Text"
              value={text}
            />

            <CounterLine
              className={styles.item}
              onDecrement={decrementRating}
              onIncrement={incrementRating}
              title="Рейтинг"
              value={rating}
            />
          </div>

          <div className={styles.footer}>
            <Button onClick={clear}>Clear</Button>
          </div>
        </div>
      </div>
    </>
  );
};
