import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
