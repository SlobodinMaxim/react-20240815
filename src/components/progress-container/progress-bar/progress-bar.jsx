import { useState } from "react";
import { useEffect } from "react";

import styles from "./progress-bar.module.css";

export const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const listener = (event) => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = y / height;
      const width = Math.floor(document.documentElement.clientWidth * ratio);

      setWidth(width);
    };

    window.addEventListener(`resize`, listener);
    window.addEventListener(`scroll`, listener);

    return () => {
      window.removeEventListener(`resize`, listener);
      window.removeEventListener(`scroll`, listener);
    };
  }, []);

  return <div className={styles.root} style={{ width: width }}></div>;
};
