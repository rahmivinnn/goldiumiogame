import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home, Battle } from "./page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="min-h-screen bg-[#1a1a1a]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </div>
  </BrowserRouter>
);
