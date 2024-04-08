import { createContext } from "react";
import { ISidePageContext } from "./sidePage.types";

export const SidePageContext = createContext<ISidePageContext>(null as unknown as ISidePageContext);

