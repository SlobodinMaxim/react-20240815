import { useState } from "react";
import { useEffect } from "react";

export const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollListener = (event) => {
      const y = window.scrollY;
      const height =
        Math.max(
          document.body.clientHeight,
          document.body.offsetHeight,
          document.body.scrollHeight,
          document.documentElement.clientHeight,
          document.documentElement.offsetHeight,
          document.documentElement.scrollHeight
        ) - window.innerHeight;
      const ratio = y / height;
      const width = document.documentElement.clientWidth * ratio;

      setWidth(width);
    };

    window.addEventListener(`resize`, scrollListener);
    window.addEventListener(`scroll`, scrollListener);

    return () => {
      window.removeEventListener(`resize`, scrollListener);
      window.removeEventListener(`scroll`, scrollListener);
    };
  }, []);

  return <div className="progress-bar" style={{ width: width }}></div>;
};
