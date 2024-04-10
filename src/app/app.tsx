import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect } from "react";
import { authStore } from "@/features/auth";

export const App = () => {
  useEffect(() => {
    authStore.loadCachedData();
  }, []);

  return (
    <RouterProvider router={router}/>
  );
};
