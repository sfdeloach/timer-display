import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="font-ubuntu min-h-screen bg-gray-400 text-gray-600 antialiased">
      <Outlet />
    </div>
  );
}

export default AppLayout;
