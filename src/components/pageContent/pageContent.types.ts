import { PropsWithChildren } from "react";

export interface IPageContentProps extends PropsWithChildren {
    direction?: "row"| "column"| "row-reverse" | "column-reverse"
}
