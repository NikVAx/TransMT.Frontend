import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app/app";
import "./style.css";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { StoreProvider, store } from "./app/rootStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Provider
        theme={defaultTheme}
        colorScheme="light"
        UNSAFE_className="wrapper"
      >
        <App />
      </Provider>
    </StoreProvider>
  </React.StrictMode>
);
