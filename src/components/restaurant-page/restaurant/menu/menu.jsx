import { Dish } from "./dish/dish";
import styles from "./menu.module.css";
import { useRequest } from "../../../../redux/hooks/use-request";
import { getDishes } from "../../../../redux/entities/dishes/get-dishes";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../../../redux/entities/request/request-statuses";
import { useEffect, useState } from "react";
import { useLoader } from "../../../loader-context/use-loader";

export const Menu = ({ dishIds }) => {
  const requestStatus = useRequest(getDishes);
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

  return (
    <div className={styles.root}>
      <h3>Меню</h3>

      <ul className={styles.list}>
        {dishIds.map((dishId) => (
          <li className={styles.item} key={dishId}>
            <Dish id={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
