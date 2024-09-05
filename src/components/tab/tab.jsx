import { Button } from "../button/button";

export const Tab = ({ activated, name, onClick }) => {
  return (
    <Button disabled={activated} displayType="tab" onClick={onClick}>
      {name}
    </Button>
  );
};
