import classNames from "classnames";
import styles from "./footer.module.css";

export const Footer = ({ className }) => {
  return <div className={classNames(styles.footer, className)}></div>;
};
