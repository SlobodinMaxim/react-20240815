import { createRef } from "react";
import { ProgressBar } from "./progress-bar/progress-bar";
import { ProgressBody } from "./progress-body/progress-body";
import styles from "./progress-container.module.css";

export const ProgressContainer = ({ children }) => {
  const ref = createRef();

  return (
    <div className={styles.progress_container}>
      <ProgressBar bodyRef={ref} />
      <ProgressBody ref={ref}>{children}</ProgressBody>
    </div>
  );
};
