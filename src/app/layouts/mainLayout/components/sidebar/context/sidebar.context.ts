import { ViewTree } from "@/shared";
import { createContext } from "react";
import { sidebarConfig } from "../sidebar.config";

export const sidebarTree = new ViewTree(sidebarConfig);

export type IStateTreeContext = typeof sidebarTree;

export type ISidebarNode = IStateTreeContext["tree"]["children"][number];

export const StateTreeContext = createContext<IStateTreeContext | null>(null);

export const ActivePathContext = createContext<string[] | null>(null);
