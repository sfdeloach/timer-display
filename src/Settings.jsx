import { useContext } from "react";
import { TimerContext } from "./AppLayout";
import Container from "./components/Container";
import NumberField from "./components/NumberField";

function Settings() {
  const timerContext = useContext(TimerContext);
  const timerState = timerContext.timerState;
  const setTimerState = timerContext.setTimerState;

  function handleChange(timer, unit, value) {
    if (timer === "speaker") {
      setTimerState((prevState) => {
        const currentMinutes = Math.floor(prevState.speakerInitial / 60);
        const currentSeconds = prevState.speakerInitial % 60;

        const newMinutes = unit === "minutes" ? value : currentMinutes;
        const newSeconds = unit === "seconds" ? value : currentSeconds;

        return {
          ...prevState,
          speakerInitial: newMinutes * 60 + newSeconds,
        };
      });
    } else {
      setTimerState((prevState) => {
        const currentMinutes = Math.floor(prevState.subjectInitial / 60);
        const currentSeconds = prevState.subjectInitial % 60;

        const newMinutes = unit === "minutes" ? value : currentMinutes;
        const newSeconds = unit === "seconds" ? value : currentSeconds;

        return {
          ...prevState,
          subjectInitial: newMinutes * 60 + newSeconds,
        };
      });
    }
  }

  return (
    <form className="flex flex-col items-center gap-6">
      <Container title="Speaker Timer">
        <NumberField
          timer="speaker"
          unit="minutes"
          value={`${Math.floor(timerState.speakerInitial / 60)}`}
          onChange={(timer, value) => handleChange(timer, "minutes", value)}
        />
        <label htmlFor="speaker-minutes">minutes</label>
        <NumberField
          timer="speaker"
          unit="seconds"
          value={`${timerState.speakerInitial % 60}`}
          onChange={(timer, value) => handleChange(timer, "seconds", value)}
        />
        <label htmlFor="speaker-seconds">seconds</label>
      </Container>
      <Container title="Subject Timer">
        <NumberField
          timer="subject"
          unit="minutes"
          value={`${Math.floor(timerState.subjectInitial / 60)}`}
          onChange={(timer, value) => handleChange(timer, "minutes", value)}
        />
        <label htmlFor="subject-minutes">minutes</label>
        <NumberField
          timer="subject"
          unit="seconds"
          value={`${timerState.subjectInitial % 60}`}
          onChange={(timer, value) => handleChange(timer, "seconds", value)}
        />
        <label htmlFor="subject-seconds">seconds</label>
      </Container>
    </form>
  );
}

export default Settings;
