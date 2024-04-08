import { Dispatch, SetStateAction } from "react";

export interface IMainLayoutContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<IMainLayoutContext["isSidebarOpen"]>>;
}
