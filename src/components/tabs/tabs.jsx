import { useState } from "react";
import { Navigation } from "./navigation/navigation";

export const Tabs = ({ children }) => {
  const [value, setValue] = useState(0);

  if (!children) {
    return null;
  }

  const getButtons = () => {
    return children.map((child, index) => ({
      id: index,
      onClick: () => {
        if (index === value) {
          return;
        }
        setValue(index);
      },
      name: child.props.name ?? `Tab #${index + 1}`,
    }));
  };

  return (
    <div>
      <Navigation buttons={getButtons()} />

      <div>{children[value]}</div>
    </div>
  );
};
