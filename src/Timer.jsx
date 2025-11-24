import { useNavigate } from "react-router";
import Container from "./components/Container";
import Button from "./components/Button";

function Timer() {
  let navigate = useNavigate();

  function onClick() {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center gap-12 pt-12">
      <Container>
        <p className="font-serif text-[25vw] leading-[20vw]">3:00</p>
      </Container>
      <Button type="button" onClick={onClick} color="red" />
    </div>
  );
}

export default Timer;
