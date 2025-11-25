function Button({ id, icon: Icon, fill, onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={
        "cursor-pointer rounded-xl px-8 py-4 shadow-lg transition hover:scale-90 hover:shadow-none"
      }
    >
      <Icon fill={fill} />
    </button>
  );
}

export default Button;
