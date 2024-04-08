import { useContext } from "react";
import { ActivePathContext, StateTreeContext } from "./sidebar.context";

export const useSidePanelStateTree = () => {
  const context = useContext(StateTreeContext);

  if (!context) {
    throw Error("wrap into sidePanel");
  }

  return context;
};

export const useActiveRoute = () => {
  const context = useContext(ActivePathContext);

  if (!context) {
    throw Error("wrap into sidePanel");
  }

  return context;
};
