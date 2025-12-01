import { useEffect, useContext } from "react";
import { TimerContext, FillContext } from "./AppLayout";
import Container from "./components/Container";
import Button from "./components/Button";
import ReplayIcon from "./icons/ReplayIcon";

function Timers() {
  const fillContext = useContext(FillContext);
  const timerContext = useContext(TimerContext);
  const timerState = timerContext.timerState;
  const setTimerState = timerContext.setTimerState;

  useEffect(() => {
    setTimerState((prevState) => ({
      ...prevState,
      speakerSecs: prevState.speakerInitial,
      subjectSecs: prevState.subjectInitial,
    }));
  }, [setTimerState]);

  function timeString(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function getTimerColor(currentSecs, initialSecs) {
    if (currentSecs === 0) return "text-red-600";

    const percentRemaining = currentSecs / initialSecs;

    if (percentRemaining > 0.5) {
      return "text-zinc-700";
    } else if (percentRemaining > 0.25) {
      return "text-yellow-600";
    } else {
      return "text-red-700";
    }
  }

  function getFlashClass(currentSecs) {
    if (currentSecs === 0) {
      return "animate-pulse";
    }
    return "";
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

  function onSpeakerReset() {
    setTimerState((prevState) => ({
      ...prevState,
      speakerSecs: prevState.speakerInitial,
      speakerIsRunning: false,
    }));
  }

  return (
    <div className="flex flex-col items-center">
      <Container hasBorder={false}>
        <p
          onClick={onSpeakerClick}
          className={`cursor-pointer text-[64vh] leading-none transition-colors duration-1000 ${getTimerColor(
            timerState.speakerSecs,
            timerState.speakerInitial,
          )} ${getFlashClass(timerState.speakerSecs)}`}
        >
          {timeString(timerState.speakerSecs)}
        </p>
        <Button
          id="reset"
          icon={ReplayIcon}
          fill={fillContext}
          onClick={onSpeakerReset}
        >
          Reset Speaker Timer
        </Button>
      </Container>
      <Container hasBorder={false}>
        <p
          onClick={onSubjectClick}
          className={`cursor-pointer text-[24vh] leading-none transition-colors duration-1000 ${getTimerColor(
            timerState.subjectSecs,
            timerState.subjectInitial,
          )} ${getFlashClass(timerState.subjectSecs)}`}
        >
          {timeString(timerState.subjectSecs)}
        </p>
      </Container>
    </div>
  );
}

export default Timers;
