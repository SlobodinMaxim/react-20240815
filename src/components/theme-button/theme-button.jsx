import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

export const ThemeButton = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={className} onClick={toggleTheme}>
      {theme === `light` ? `Switch to dark` : `Swithc to light`}
    </Button>
  );
};
