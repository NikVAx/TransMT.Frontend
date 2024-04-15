import { PropsWithChildren } from "react";

export interface IActionGuard extends PropsWithChildren
{
    permissions: string[];
}