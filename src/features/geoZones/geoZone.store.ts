import { IPageRequestOptions } from "@/shared";
import { IGeoZone } from "./geoZone.types";
import { makeAutoObservable, runInAction } from "mobx";
import { getGeoZones } from "./geoZone.service";
import { RootStore } from "@/app/rootStore";

export class GeoZoneStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this.geoZones = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 12,
    } as IPageRequestOptions;
    this.isLoading = true;
  }

  geoZones: IGeoZone[];

  public isLoading: boolean;

  private _pageOptions: IPageRequestOptions;

  public get pageOptions() {
    return this._pageOptions;
  }

  public set pageOptions(options: IPageRequestOptions) {
    this._pageOptions = options;
    this.loadPage();
  }

  public async loadPage() {
    runInAction(() => {
      this.isLoading = true;
    });

    const [status, response] = await getGeoZones(this.pageOptions);

    runInAction(async () => {
      if (status) {
        this.geoZones = response.data.items;
      } else console.log("failed to load geozones");
      this.isLoading = false;
    });
  }
}
