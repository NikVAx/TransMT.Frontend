import { Dispatch, SetStateAction } from "react";

export interface ISidePageContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<ISidePageContext["isOpen"]>>;
}
