import { useTheme } from "../theme-context/use-theme";
import styles from "./button.module.css";
import classNames from "classnames";

export const Button = ({
  children,
  className,
  disabled,
  displayType,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(
        className,
        styles[`root`],
        styles[displayType],
        styles[theme]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
