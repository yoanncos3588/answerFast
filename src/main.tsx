import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Theme } from "react-daisyui";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Theme
          dataTheme="synthwave"
          className="bg-gradient-to-tr from-neutral to-neutral-focus p-8 h-full"
        >
          <App />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
