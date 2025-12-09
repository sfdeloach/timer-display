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
  }, [setTimerState]);

  function timeString(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function getTimerColor(currentSecs, initialSecs) {
    if (currentSecs === 0) return "text-red-600";

    const percentRemaining = currentSecs / initialSecs;

    if (percentRemaining > 0.25) {
      return "text-zinc-700";
    } else if (percentRemaining > 0.1) {
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

  return (
    <div className="flex flex-col items-center">
      <Container hasBorder={false}>
        <p
          onClick={onSpeakerClick}
          className={`cursor-pointer text-[92vh]/[84vh] tracking-[-3rem] transition-colors duration-2000 ${getTimerColor(
            timerState.speakerSecs,
            timerState.speakerInitial,
          )} ${getFlashClass(timerState.speakerSecs)}`}
        >
          {timeString(timerState.speakerSecs)}
        </p>
      </Container>
      <Container hasBorder={false}>
        <p
          onClick={onSubjectClick}
          className={`cursor-pointer text-[14vh]/[6vh] transition-colors duration-2000 ${getTimerColor(
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
