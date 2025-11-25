function Container({ children, title, hasBorder = true }) {
  let classNames = "rounded-xl p-8 shadow-lg";

  if (!hasBorder) {
    classNames = "p-8";
  }

  return (
    <div className={classNames}>
      <h3 className="mb-2 text-center text-3xl">{title}</h3>
      {children}
    </div>
  );
}

export default Container;
