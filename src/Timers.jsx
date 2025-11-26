import { useEffect, useContext } from "react";
import { TimerContext } from "./AppLayout";
import Container from "./components/Container";

function Timers() {
  const timerContext = useContext(TimerContext);
  const timerState = timerContext.timerState;
  const setTimerState = timerContext.setTimerState;

  useEffect(() => {
    setTimerState((prevState) => ({
      ...prevState,
      speakerSecs: prevState.speakerInitial,
      subjectSecs: prevState.subjectInitial,
    }));
  }, []);

  function timeString(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function onSpeakerClick() {
    setTimerState((prevState) => ({
      ...prevState,
      speakerIsRunning: !prevState.speakerIsRunning,
    }));
  }

  function onSubjectClick() {
    setTimerState((prevState) => ({
      ...prevState,
      subjectIsRunning: !prevState.subjectIsRunning,
    }));
  }

  return (
    <div className="flex flex-col items-center">
      <Container hasBorder={false}>
        <p
          onClick={onSpeakerClick}
          className="cursor-pointer text-[64vh] leading-none"
        >
          {timeString(timerState.speakerSecs)}
        </p>
      </Container>
      <Container hasBorder={false}>
        <p
          onClick={onSubjectClick}
          className="cursor-pointer text-[24vh] leading-none"
        >
          {timeString(timerState.subjectSecs)}
        </p>
      </Container>
    </div>
  );
}

export default Timers;
