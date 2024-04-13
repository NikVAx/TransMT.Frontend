import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect } from "react";
import { useStore } from "./rootStore";

export const App = () => {
  const authStore = useStore((store) => store.authStore);

  useEffect(() => {
    authStore.loadCachedData();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};
