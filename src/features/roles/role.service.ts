import {
  IPaginatedRequest,
  IPaginatedResponse,
  appApiInstance,
  createGuardRequest,
} from "@/shared";
import { ICreateRoleDto, IGetRoleDto } from "./role.types";

const ROUTE = "roles";

export const getRoles = createGuardRequest((params?: IPaginatedRequest) =>
  appApiInstance.get<IPaginatedResponse<IGetRoleDto>>(`/${ROUTE}`, {
    params,
  })
);

export const createRole = createGuardRequest((data: ICreateRoleDto) =>
  appApiInstance.post<IGetRoleDto>(`/${ROUTE}`, data)
);


/*
export const deleteRoles = createGuardRequest(
  (data: IManyDeleteRequestOptions) =>
    appApiInstance.delete(`/${ROUTE}`, { data })
);

export const getRoleById = createGuardRequest((id: string) =>
  appApiInstance.get<IGetRoleDto>(`/${ROUTE}/${id}`)
);

export const editRoleById = createGuardRequest(
  (id: string, data: IEditRoleDto) =>
    appApiInstance.patch<IGetRoleDto>(`/${ROUTE}/${id}`, data)
);
*/
