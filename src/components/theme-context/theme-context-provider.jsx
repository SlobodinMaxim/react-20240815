import { useState } from "react";
import { ThemeContext } from "./theme-context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(`light`);

  const toggleTheme = () => {
    setTheme((current) => (current === `light` ? `dark` : `light`));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
