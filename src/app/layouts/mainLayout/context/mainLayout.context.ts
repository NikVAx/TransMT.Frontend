import { createContext } from "react";
import { IMainLayoutContext } from "./mainLayout.types";

export const MainLayoutContext = createContext<IMainLayoutContext>(null as unknown as IMainLayoutContext);
