import classNames from "classnames";

import styles from "./text-line.module.css";

export const TextLine = ({ className, onChange, title, value }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{title}</span>

      <input onChange={onChange} type="text" value={value} />
    </div>
  );
};
