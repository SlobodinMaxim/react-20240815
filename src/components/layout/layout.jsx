import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressContainer } from "../progress-container/progress-container";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />

      <div className={styles.test1}>
        <ProgressContainer className={styles.test2}>
          {children}
        </ProgressContainer>
      </div>

      <Footer />
    </div>
  );
};
