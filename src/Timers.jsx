import Container from "./components/Container";

function Timers() {
  return (
    <div className="flex flex-col items-center gap-12 pt-12">
      <Container hasBorder={false}>
        <p className="text-[25vw] leading-[20vw] tracking-wide">3:00</p>
      </Container>
    </div>
  );
}

export default Timers;
