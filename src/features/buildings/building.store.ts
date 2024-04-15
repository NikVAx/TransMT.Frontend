import { makeAutoObservable } from "mobx";
import { IBuilding, ICreateBuildingDto } from "./building.types";
import {
  createBuilding,
  deleteBuildings,
  getBuildings,
} from "./building.service";
import {
  IManyDeleteOptions,
  IManyDeleteRequestOptions,
  IPageRequestOptions,
  toArray,
} from "@/shared";
import { RootStore } from "@/app/rootStore";

export class BuildingStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this._buildings = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 12,
    } as IPageRequestOptions;
  }

  private _buildings: IBuilding[];

  public get buildings() {
    return this._buildings;
  }

  public set buildings(buildings: IBuilding[]) {
    this._buildings = buildings;
  }

  private _pageOptions: IPageRequestOptions;

  public get pageOptions() {
    return this._pageOptions;
  }

  public set pageOptions(options: IPageRequestOptions) {
    this._pageOptions = options;
    this.loadPage();
  }

  public async deleteBuildings(
    options: IManyDeleteOptions,
    loadPage: boolean = true
  ) {
    const mappedOptions: IManyDeleteRequestOptions = {
      ...options,
      keys: toArray(options.keys),
    };

    console.log("mappedOptions", mappedOptions);

    const [status, response] = await deleteBuildings(mappedOptions);

    if (status) {
      if (loadPage) this.loadPage();
    } else {
      console.log("can't delete building(s) for some reason", response);
    }
  }

  public async createBuilding(
    options: ICreateBuildingDto,
    loadPage: boolean = true
  ) {
    const [status, response] = await createBuilding(options);

    if (status) {
      if (loadPage) this.loadPage();
    } else {
      console.log("can't create building for some reason", response);
    }
  }

  public async loadPage() {
    const [status, response] = await getBuildings(this.pageOptions);

    if (status) {
      this.buildings = response.data.items;
    } else {
      console.log("buildings fetch is failed");
    }
  }
}
