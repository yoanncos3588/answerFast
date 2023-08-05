import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Theme } from "react-daisyui";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme dataTheme="synthwave" className="bg-gradient-to-tr from-neutral to-neutral-focus p-8 h-full">
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
