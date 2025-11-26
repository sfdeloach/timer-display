import { useContext } from "react";
import { TimerContext } from "./AppLayout";
import Container from "./components/Container";
import NumberField from "./components/NumberField";

function Settings() {
  const timerContext = useContext(TimerContext);
  const timerState = timerContext.timerState;
  const setTimerState = timerContext.setTimerState;

  function handleChange(timer, value) {
    if (timer === "subject") {
      setTimerState((prevState) => ({
        ...prevState,
        subjectInitial: value,
      }));
    } else if (timer === "speaker") {
      setTimerState((prevState) => ({
        ...prevState,
        speakerInitial: value,
      }));
    }
  }

  return (
    <form className="flex flex-col items-center gap-6">
      <Container title="Speaker">
        <NumberField
          timer="speaker"
          value={`${timerState.speakerInitial / 60}`}
          onChange={handleChange}
        />
        <label htmlFor="speaker">minutes</label>
      </Container>
      <Container title="Subject">
        <NumberField
          timer="subject"
          value={`${timerState.subjectInitial / 60}`}
          onChange={handleChange}
        />
        <label htmlFor="subject">minutes</label>
      </Container>
    </form>
  );
}

export default Settings;
