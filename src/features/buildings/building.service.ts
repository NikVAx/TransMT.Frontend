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

export const getBuildings = createGuardRequest((params?: IPaginatedRequest) =>
  appApiInstance.get<IPaginatedResponse<IGetBuildingDto>>("/buildings", {
    params,
  })
);

export const deleteBuildings = createGuardRequest(
  (data: IManyDeleteRequestOptions) =>
    appApiInstance.delete("/buildings", { data })
);

export const createBuilding = createGuardRequest((data: ICreateBuildingDto) =>
  appApiInstance.post<IGetBuildingDto>("/buildings", data)
);

export const getBuildingById = createGuardRequest((id: string) =>
  appApiInstance.get<IGetBuildingDto>(`/buildings/${id}`)
);

export const editBuildingById = createGuardRequest(
  (id: string, data: IEditBuildingDto) =>
    appApiInstance.patch<IGetBuildingDto>(`/buildings/${id}`, data)
);
