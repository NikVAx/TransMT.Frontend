import { PropsWithChildren, useState } from "react";
import { SidePageContext } from "./sidePage.context";

export const SidePageProvider = ({ children }: PropsWithChildren<any>) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidePageContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidePageContext.Provider>
  );
};
