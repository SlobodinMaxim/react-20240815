import { Button } from "../button/button";

export const Tab = ({ disabled, name, onClick }) => {
  return (
    <Button disabled={disabled} displayType="tab" onClick={onClick}>
      {name}
    </Button>
  );
};
