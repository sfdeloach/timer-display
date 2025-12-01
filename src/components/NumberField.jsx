function NumberField({ timer, unit, value, onChange }) {
  function onChangeWrapper(event) {
    const value = parseInt(event.target.value, 10) || 0;

    onChange(timer, value);
  }

  return (
    <input
      type="number"
      min="0"
      value={value}
      onChange={onChangeWrapper}
      name={`${timer}-${unit}`}
      id={`${timer}-${unit}`}
      className="mx-2 w-20 rounded py-2 text-center shadow-lg focus:outline-none"
    />
  );
}

export default NumberField;
