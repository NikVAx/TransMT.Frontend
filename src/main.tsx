import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app/app";
import "./style.css";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider
      theme={defaultTheme}
      colorScheme="dark"
      UNSAFE_className="wrapper"
    >
      <App />
    </Provider>
  </React.StrictMode>
);
