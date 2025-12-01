import { useContext } from "react";
import { useNavigate } from "react-router";
import { FillContext } from "../AppLayout";
import Button from "./Button";
import HomeIcon from "../icons/HomeIcon";
import SettingsIcon from "../icons/SettingsIcon";
import TimerIcon from "../icons/TimerIcon";

function Navigation({ fill }) {
  const fillContext = useContext(FillContext);
  let navigate = useNavigate();

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

  return (
    <div className="my-4 flex gap-4">
      <Button id="home" icon={HomeIcon} fill={fillContext} onClick={onClick} />
      <Button id="settings" icon={SettingsIcon} fill={fillContext} onClick={onClick} />
      <Button id="timers" icon={TimerIcon} fill={fillContext} onClick={onClick} />
    </div>
  );
}

export default Navigation;
