import { Dispatch, SetStateAction } from "react";

export interface IMainLayoutContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<IMainLayoutContext["isOpen"]>>;
}
