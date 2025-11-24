function Container({ children, title }) {
  return (
    <div className="rounded-2xl border border-gray-500 p-8 shadow-lg">
      <h3 className="mb-2 text-center text-3xl">{title}</h3>
      {children}
    </div>
  );
}

export default Container;
