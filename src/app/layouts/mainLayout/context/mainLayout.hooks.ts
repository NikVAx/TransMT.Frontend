import { useContext } from "react";
import { MainLayoutContext } from "./mainLayout.context";

export const useMainLayout = () => { 
    return useContext(MainLayoutContext)
};