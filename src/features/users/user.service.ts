import {
  IManyDeleteRequestOptions,
  IPaginatedRequest,
  IPaginatedResponse,
  appApiInstance,
  createGuardRequest,
} from "@/shared";
import { ICreateUserDto, IEditUserDto, IGetUserDto } from "./user.types";

const ROUTE = "users";

export const getUsers = createGuardRequest((params?: IPaginatedRequest) =>
  appApiInstance.get<IPaginatedResponse<IGetUserDto>>(`/${ROUTE}`, {
    params,
  })
);

export const deleteUsers = createGuardRequest(
  (data: IManyDeleteRequestOptions) =>
    appApiInstance.delete(`/${ROUTE}`, { data })
);

export const createUser = createGuardRequest((data: ICreateUserDto) =>
  appApiInstance.post<IGetUserDto>(`/${ROUTE}`, data)
);

export const getUserById = createGuardRequest((id: string) =>
  appApiInstance.get<IGetUserDto>(`/${ROUTE}/${id}`)
);

export const editUserById = createGuardRequest(
  (id: string, data: IEditUserDto) =>
    appApiInstance.patch<IGetUserDto>(`/${ROUTE}/${id}`, data)
);
