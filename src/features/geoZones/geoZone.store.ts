import { IPageRequestOptions } from "@/shared";
import { IGeoZone } from "./geoZone.types";
import { makeAutoObservable } from "mobx";
import { getGeoZones } from "./geoZone.service";
import { RootStore } from "@/app/rootStore";

export class GeoZoneStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this._geoZones = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 12,
    } as IPageRequestOptions;
  }

  private _geoZones: IGeoZone[];
  public get geoZones() {
    return this._geoZones;
  }

  public set geoZones(geoZones: IGeoZone[]) {
    this._geoZones = geoZones;
  }

  private _pageOptions: IPageRequestOptions;

  public get pageOptions() {
    return this._pageOptions;
  }

  public set pageOptions(options: IPageRequestOptions) {
    this._pageOptions = options;
    this.loadPage();
  }

  public async loadPage() {
    const [status, response] = await getGeoZones(this.pageOptions);

    if (status) {
      this.geoZones = response.data.items;
    } else console.log("failed to load geozones");
  }
}
