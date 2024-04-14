import { makeAutoObservable, runInAction } from "mobx";
import { IBuilding } from "./building.types";
import { getBuildings } from "./building.service";
import { IPageRequestOptions } from "@/shared";
import { RootStore } from "@/app/rootStore";

export class BuildingStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this.buildings = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 12,
    } as IPageRequestOptions;
    this.isLoading = true;
  }

  public buildings: IBuilding[];

  public isLoading: boolean;

  private _pageOptions: IPageRequestOptions;

  public get pageOptions() {
    return this._pageOptions;
  }

  public set pageOptions(options: IPageRequestOptions) {
    this._pageOptions = options;
    this.loadPage();
  }

  public setPageOptions(pageIndex: number, pageSize: number) {
    this.pageOptions.pageIndex = pageIndex;
    this.pageOptions.pageSize = pageSize;
  }

  public async loadPage() {
    runInAction(() => {
      this.isLoading = true;
    });
    
    const [status, response] = await getBuildings(this.pageOptions);

    runInAction(async () => {
      if (status) {
        this.buildings = response.data.items;
      }
      this.isLoading = false;
    });
    
  }
}
