import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/fe-sprint-responsive-wired-dot-com-clone">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
