import { useNavigate } from "react-router";
import ArrowBack from "./icons/ArrowBack";
import Button from "./components/Button";
import Container from "./components/Container";

function Timer() {
  let navigate = useNavigate();

  function onClick() {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center gap-12 pt-12">
      <Container hasBorder={false}>
        <p className="text-[25vw] leading-[20vw] tracking-wide text-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
          3:00
        </p>
      </Container>
      <Button type="button" icon={ArrowBack} onClick={onClick} />
    </div>
  );
}

export default Timer;
