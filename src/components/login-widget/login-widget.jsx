import { Button } from "../button/button";
import { useAuthorization } from "../authorization-context/use-authorization";
import styles from "./login-widget.module.css";

export const LoginWidget = () => {
  const { user, login, logout } = useAuthorization();
  const { isAuthorized, username } = user;

  const loginForm = (
    <div className={styles.login_widget}>
      <Button onClick={login}>Войти</Button>
    </div>
  );

  const logoutForm = (
    <div className={styles.login_widget}>
      <span>{username}</span>
      <Button onClick={logout}>Выйти</Button>
    </div>
  );

  return !isAuthorized ? loginForm : logoutForm;
};
