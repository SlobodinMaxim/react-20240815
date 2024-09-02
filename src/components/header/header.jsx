import { LoginWidget } from "../login-widget/login-widget";
import { ThemeButton } from "../theme-button/theme-button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.themeButtons}>
        <ThemeButton />
        <LoginWidget />
      </div>
    </div>
  );
};
