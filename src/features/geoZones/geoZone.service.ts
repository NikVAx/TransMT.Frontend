import {
  IManyDeleteRequestOptions,
  IPaginatedRequest,
  IPaginatedResponse,
  appApiInstance,
  createGuardRequest,
} from "@/shared";
import {
  ICreateGeoZoneDto,
  IEditGeoZoneDto,
  IGetGeoZoneDto,
} from "./geoZone.types";

const ROUTE = "geozones";

export const getGeoZones = createGuardRequest((params?: IPaginatedRequest) =>
  appApiInstance.get<IPaginatedResponse<IGetGeoZoneDto>>("/geozones", {
    params,
  })
);

export const deleteGeoZones = createGuardRequest(
  (data: IManyDeleteRequestOptions) =>
    appApiInstance.delete(`/${ROUTE}`, { data })
);

export const createGeoZone = createGuardRequest((data: ICreateGeoZoneDto) =>
  appApiInstance.post<IGetGeoZoneDto>(`/${ROUTE}`, data)
);

export const getGeoZoneById = createGuardRequest((id: string) =>
  appApiInstance.get<IGetGeoZoneDto>(`/${ROUTE}/${id}`)
);

export const editGeoZoneById = createGuardRequest(
  (id: string, data: IEditGeoZoneDto) =>
    appApiInstance.patch<IGetGeoZoneDto>(`/${ROUTE}/${id}`, data)
);
