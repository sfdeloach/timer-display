function Button({ type, icon: Icon, onClick }) {
  return (
    <button
      type={type}
      onClick={type === "submit" ? null : onClick}
      className={
        "cursor-pointer rounded-full p-4 shadow-lg transition hover:scale-90 hover:shadow-none"
      }
    >
      <Icon />
    </button>
  );
}

export default Button;
