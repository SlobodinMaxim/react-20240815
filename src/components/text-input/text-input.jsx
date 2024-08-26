export const TextInput = ({ onChange, title, value }) => {
  return (
    <div>
      <span>{title}</span>

      <input onChange={onChange} type="text" value={value} />
    </div>
  );
};
