import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Loader } from "../loader/loader";
import { ProgressContainer } from "../progress-container/progress-container";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Header className={styles.header} />

        <div className={styles.body}>
          <ProgressContainer>{children}</ProgressContainer>
        </div>

        <Footer className={styles.footer} />
      </div>

      <Loader />
    </>
  );
};
