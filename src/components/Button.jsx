import ArrowForward from "../fonts/ArrowForward";
import ArrowBack from "../fonts/ArrowBack";

function Button({ type, color, onClick }) {
  return (
    <button
      type={type}
      onClick={type === "submit" ? null : onClick}
      className={`cursor-pointer rounded border border-${color}-900 bg-${color}-800 px-8 py-2 shadow-lg transition hover:scale-95 hover:bg-${color}-900 active:bg-${color}-800`}
    >
      {type === "submit" ? <ArrowForward /> : <ArrowBack />}
    </button>
  );
}

export default Button;
