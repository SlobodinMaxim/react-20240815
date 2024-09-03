import classNames from "classnames";
import { LoginWidget } from "../login-widget/login-widget";
import { ThemeButton } from "../theme-button/theme-button";
import styles from "./header.module.css";

export const Header = ({ className }) => {
  return (
    <div className={classNames(styles.header, className)}>
      <div className={styles.themeButtons}>
        <ThemeButton />
        <LoginWidget />
      </div>
    </div>
  );
};
