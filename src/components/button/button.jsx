import styles from "./button.module.css";
import classNames from "classnames";

export const Button = ({
  children,
  className,
  disabled,
  displayType,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        className,
        styles[`root`],
        styles[`root-${displayType}`]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
