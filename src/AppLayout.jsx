import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-400 font-mono text-gray-600">
      <Outlet />
    </div>
  );
}

export default AppLayout;
