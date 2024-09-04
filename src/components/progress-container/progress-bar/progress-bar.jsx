import { useState } from "react";
import { useEffect } from "react";

import styles from "./progress-bar.module.css";

export const ProgressBar = ({ bodyRef }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const body = bodyRef.current;

    if (!body) {
      return;
    }

    const listener = (event) => {
      const y = body.scrollTop;
      const height = body.scrollHeight - body.clientHeight;
      if (y === 0 || height === 0) {
        setWidth(0);
        return;
      }

      const ratio = y / height;
      setWidth(Math.floor(body.clientWidth * ratio));
    };

    window.addEventListener(`resize`, listener);
    body.addEventListener(`scroll`, listener);

    return () => {
      window.removeEventListener(`resize`, listener);
      body.removeEventListener(`scroll`, listener);
    };
  }, []);

  return <div className={styles.progress_bar} style={{ width }}></div>;
};
