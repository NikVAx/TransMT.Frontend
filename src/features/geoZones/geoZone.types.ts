import { IGeoPoint } from "@/shared/api/types";

export interface IGeoZone {
  id: string;
  name: string;
  color: string;
  points: IGeoPoint[];
}

export interface IGetGeoZoneDto extends IGeoZone {}
export interface ICreateGeoZoneDto extends Omit<IGeoZone, "id"> {}
export interface IEditGeoZoneDto extends Partial<ICreateGeoZoneDto> {}
