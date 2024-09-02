import { useContext, useRef } from "react";
import { ProgressBar } from "./progress-bar/progress-bar";
import styles from "./progress-container.module.css";
import classNames from "classnames";

export const ProgressContainer = ({ children, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <ProgressBar />

      {children}
    </div>
  );
};
