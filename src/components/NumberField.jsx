function NumberField({ timer, value, onChange }) {
  function onChangeWrapper(event) {
    let value = parseInt(event.target.value, 10) * 60;
    onChange(timer, value);
  }

  return (
    <input
      type="number"
      min="0"
      value={value}
      onChange={onChangeWrapper}
      name={`${timer}`}
      id={`${timer}`}
      className="mx-2 w-20 rounded py-2 text-center shadow-lg focus:outline-none"
    />
  );
}

export default NumberField;
