export const Tab = ({ disabled, name, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};
