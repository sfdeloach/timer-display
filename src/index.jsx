import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AppLayout from "./AppLayout.jsx";
import Home from "./Home.jsx";
import Settings from "./Settings.jsx";
import Timers from "./Timers.jsx";

createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="timers" element={<Timers />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
