import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./progress-body.module.css";

export const ProgressBody = forwardRef(({ children, className }, ref) => {
  return (
    <div className={classNames(styles.progress_body, className)} ref={ref}>
      {children}
    </div>
  );
});
