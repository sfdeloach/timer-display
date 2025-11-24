function NumberField({ onChange, defaultValue, name }) {
  return (
    <input
      type="number"
      onChange={onChange}
      defaultValue={defaultValue}
      name={name}
      className="mx-2 w-20 rounded border border-gray-500 py-2 text-center shadow-lg focus:outline-none"
    />
  );
}

export default NumberField;
