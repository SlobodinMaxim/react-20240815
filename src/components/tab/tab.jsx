import { Button } from "../button/button";
import styles from "./tab.module.css";

export const Tab = ({ disabled, name, onClick }) => {
  return (
    // <button className={styles.root} disabled={disabled} onClick={onClick}>
    //   {name}
    // </button>
    <Button disabled={disabled} displayType="tab" onClick={onClick}>
      {name}
    </Button>
  );
};
