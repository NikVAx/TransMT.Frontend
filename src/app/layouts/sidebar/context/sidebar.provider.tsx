import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

import {
  ActivePathContext,
  StateTreeContext,
  sidebarTree,
} from "./sidebar.context";
import { getAllRoutesWithoutId } from "@/shared";

export function SidePanelProvider({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const routes = getAllRoutesWithoutId(pathname);

  return (
    <StateTreeContext.Provider value={sidebarTree}>
      <ActivePathContext.Provider value={routes}>
        {children}
      </ActivePathContext.Provider>
    </StateTreeContext.Provider>
  );
}
