import { appApiInstance, createGuardRequest } from "@/shared";
import { IPermission } from "./permission.types";

const ROUTE = "permissions";

export const getPermissions = createGuardRequest(() =>
    appApiInstance.get<IPermission[]>(`/${ROUTE}`, { })
  );