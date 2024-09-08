import { useState } from "react";
import { LoaderContext } from "./loader-context";

const DEFAULT_VALUE = false;

export const LoaderContextProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(DEFAULT_VALUE);

  const show = () => {
    setIsShown(true);
  };

  const hide = () => {
    setIsShown(DEFAULT_VALUE);
  };

  return (
    <LoaderContext.Provider value={{ hide, isShown, show }}>
      {children}
    </LoaderContext.Provider>
  );
};
