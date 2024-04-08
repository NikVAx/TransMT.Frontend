import { PropsWithChildren, useState } from "react";
import { MainLayoutContext } from "./mainLayout.context";

export const MainLayoutProvider = ({ children }: PropsWithChildren<any>) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MainLayoutContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MainLayoutContext.Provider>
  );
};
