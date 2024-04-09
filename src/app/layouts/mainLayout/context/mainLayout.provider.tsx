import { PropsWithChildren, useState } from "react";
import { MainLayoutContext } from "./mainLayout.context";

export const MainLayoutProvider = ({ children }: PropsWithChildren<any>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <MainLayoutContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </MainLayoutContext.Provider>
  );
};
