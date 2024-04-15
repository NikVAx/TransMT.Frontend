import {
  IManyDeleteRequestOptions,
  IPaginatedRequest,
  IPaginatedResponse,
  appApiInstance,
  createGuardRequest,
} from "@/shared";
import {
  ICreateBuildingDto,
  IEditBuildingDto,
  IGetBuildingDto,
} from "./building.types";

const ROUTE = "buildings";

export const getBuildings = createGuardRequest((params?: IPaginatedRequest) =>
  appApiInstance.get<IPaginatedResponse<IGetBuildingDto>>(`/${ROUTE}`, {
    params,
  })
);

export const deleteBuildings = createGuardRequest(
  (data: IManyDeleteRequestOptions) =>
    appApiInstance.delete(`/${ROUTE}`, { data })
);

export const createBuilding = createGuardRequest((data: ICreateBuildingDto) =>
  appApiInstance.post<IGetBuildingDto>(`/${ROUTE}`, data)
);

export const getBuildingById = createGuardRequest((id: string) =>
  appApiInstance.get<IGetBuildingDto>(`/${ROUTE}/${id}`)
);

export const editBuildingById = createGuardRequest(
  (id: string, data: IEditBuildingDto) =>
    appApiInstance.patch<IGetBuildingDto>(`/${ROUTE}/${id}`, data)
);
