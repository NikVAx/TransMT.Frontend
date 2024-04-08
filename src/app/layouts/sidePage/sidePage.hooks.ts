import { useContext } from "react";
import { SidePageContext } from "./sidePage.context";

export const useSidePage = () => { 
    return useContext(SidePageContext)
};