function Checkbox({ label, id, checked, onChange }) {
  return (
    <div className="flex justify-center">
      <input
        type="checkbox"
        id={id}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label className="ml-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
