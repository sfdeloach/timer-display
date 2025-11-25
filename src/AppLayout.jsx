import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

function AppLayout() {
  return (
    <div className="font-ubuntu flex min-h-screen flex-col items-center bg-zinc-300 text-zinc-700 text-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
      <Navigation fill="var(--color-zinc-400)" />
      <Outlet />
    </div>
  );
}

export default AppLayout;
