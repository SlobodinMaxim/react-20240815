export const Button = ({ name, onClick }) => {
  return !onClick || typeof onClick !== `function` ? (
    <button>{name}</button>
  ) : (
    <button onClick={onClick}>{name}</button>
  );
};
