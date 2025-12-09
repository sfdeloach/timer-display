import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { TimerContext, FillContext } from "../AppLayout";
import Button from "./Button";
import HomeIcon from "../icons/HomeIcon";
import SettingsIcon from "../icons/SettingsIcon";
import TimerIcon from "../icons/TimerIcon";
import ReplayIcon from "../icons/ReplayIcon";

function Navigation({ fill }) {
  const fillContext = useContext(FillContext);
  const timerContext = useContext(TimerContext);
  const setTimerState = timerContext.setTimerState;
  let navigate = useNavigate();

  useEffect(() => {
    setTimerState((prevState) => ({
      ...prevState,
      speakerSecs: prevState.speakerInitial,
      subjectSecs: prevState.subjectInitial,
    }));
  }, [setTimerState]);

  function onClick(event) {
    switch (event.currentTarget.id) {
      case "home":
        navigate("/");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "timers":
        navigate("/timers");
        break;
      default:
        break;
    }
  }

  function onSpeakerReset() {
    setTimerState((prevState) => ({
      ...prevState,
      speakerSecs: prevState.speakerInitial,
      speakerIsRunning: false,
    }));
  }

  return (
    <div className="absolute z-1 my-4 flex gap-4">
      <Button id="home" icon={HomeIcon} fill={fillContext} onClick={onClick} />
      <Button
        id="settings"
        icon={SettingsIcon}
        fill={fillContext}
        onClick={onClick}
      />
      <Button
        id="timers"
        icon={TimerIcon}
        fill={fillContext}
        onClick={onClick}
      />
      <Button
        id="reset"
        icon={ReplayIcon}
        fill={fillContext}
        onClick={onSpeakerReset}
      />
    </div>
  );
}

export default Navigation;
