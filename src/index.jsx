import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AppLayout from "./AppLayout.jsx";
import Home from "./Home.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="timer" element={<Timer />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
