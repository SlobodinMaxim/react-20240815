import { Button } from "./button/button";

export const Navigation = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button) => (
        <Button
          key={button.id}
          onClick={button.onClick}
          name={button.name}
        />
      ))}
    </div>
  );
};
