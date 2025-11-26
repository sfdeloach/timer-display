import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export const TimerContext = createContext(null);

function AppLayout() {
  const [timerState, setTimerState] = useState({
    speakerSecs: 180,
    speakerInitial: 180,
    speakerIsRunning: false,
    subjectSecs: 3600,
    subjectInitial: 3600,
    subjectIsRunning: false,
  });
  const [speakerIntervalId, setSpeakerIntervalId] = useState(null);
  const [subjectIntervalId, setSubjectIntervalId] = useState(null);

  useEffect(() => {
    if (timerState.speakerIsRunning && speakerIntervalId === null) {
      const intervalId = setInterval(() => {
        setTimerState((prevState) => ({
          ...prevState,
          speakerSecs: prevState.speakerSecs - 1,
        }));
      }, 1000);
      setSpeakerIntervalId(intervalId);
    } else if (!timerState.speakerIsRunning && speakerIntervalId !== null) {
      clearInterval(speakerIntervalId);
      setSpeakerIntervalId(null);
    }

    return () => {
      if (speakerIntervalId !== null) {
        clearInterval(speakerIntervalId);
      }
    };
  }, [timerState.speakerIsRunning, speakerIntervalId]);

  useEffect(() => {
    if (timerState.subjectIsRunning && subjectIntervalId === null) {
      const intervalId = setInterval(() => {
        setTimerState((prevState) => ({
          ...prevState,
          subjectSecs: prevState.subjectSecs - 1,
        }));
      }, 1000);
      setSubjectIntervalId(intervalId);
    } else if (!timerState.subjectIsRunning && subjectIntervalId !== null) {
      clearInterval(subjectIntervalId);
      setSubjectIntervalId(null);
    }

    return () => {
      if (subjectIntervalId !== null) {
        clearInterval(subjectIntervalId);
      }
    };
  }, [timerState.subjectIsRunning, subjectIntervalId]);

  return (
    <TimerContext value={{ timerState, setTimerState }}>
      <div className="font-ubuntu flex min-h-screen flex-col items-center bg-zinc-300 text-zinc-700 text-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
        <Navigation fill="var(--color-zinc-400)" />
        <Outlet />
      </div>
    </TimerContext>
  );
}

export default AppLayout;
