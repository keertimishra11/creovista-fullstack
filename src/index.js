import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // global css file (create this next)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
