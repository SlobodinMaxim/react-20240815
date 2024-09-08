import styles from "./loader.module.css";
import { useLoader } from "../loader-context/use-loader";

export const Loader = () => {
  const { isShown } = useLoader();

  if (!isShown) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};
