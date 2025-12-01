import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export const TimerContext = createContext(null);
export const FillContext = createContext(null);

function AppLayout() {
  const [timerState, setTimerState] = useState({
    speakerSecs: 180,
    speakerInitial: 180,
    speakerIsRunning: false,
    subjectSecs: 3600,
    subjectInitial: 3600,
    subjectIsRunning: false,
  });

  useEffect(() => {
    if (!timerState.speakerIsRunning) return;

    const intervalId = setInterval(() => {
      setTimerState((prevState) => {
        if (prevState.speakerSecs <= 1) {
          return { ...prevState, speakerSecs: 0, speakerIsRunning: false };
        }
        return { ...prevState, speakerSecs: prevState.speakerSecs - 1 };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerState.speakerIsRunning]);

  useEffect(() => {
    if (!timerState.subjectIsRunning) return;

    const intervalId = setInterval(() => {
      setTimerState((prevState) => {
        if (prevState.subjectSecs <= 1) {
          return { ...prevState, subjectSecs: 0, subjectIsRunning: false };
        }
        return { ...prevState, subjectSecs: prevState.subjectSecs - 1 };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerState.subjectIsRunning]);

  return (
    <TimerContext.Provider value={{ timerState, setTimerState }}>
      <FillContext.Provider value="var(--color-zinc-400)">
        <div className="font-ubuntu flex min-h-screen flex-col items-center bg-zinc-300 text-zinc-700 text-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
          <Navigation />
          <Outlet />
        </div>
      </FillContext.Provider>
    </TimerContext.Provider>
  );
}

export default AppLayout;
