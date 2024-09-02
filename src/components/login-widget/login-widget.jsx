import { Button } from "../button/button";
import { useUser } from "../user-context/use-user";
import styles from "./login-widget.module.css";

export const LoginWidget = () => {
  const { user, login, logout } = useUser();
  const { isAuthorized, username } = user;

  const loginForm = (
    <div className={styles.root}>
      <Button onClick={login}>Войти</Button>
    </div>
  );

  const logoutForm = (
    <div className={styles.root}>
      <span>{username}</span>
      <Button onClick={logout}>Выйти</Button>
    </div>
  );

  return !isAuthorized ? loginForm : logoutForm;
};
