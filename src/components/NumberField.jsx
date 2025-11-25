function NumberField({ onChange, defaultValue, name, id }) {
  return (
    <input
      type="number"
      onChange={onChange}
      defaultValue={defaultValue}
      name={name}
      id={id}
      className="mx-2 w-20 rounded py-2 text-center shadow-lg focus:outline-none"
    />
  );
}

export default NumberField;
