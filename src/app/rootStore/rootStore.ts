import { AuthStore } from "@/features";
import { BuildingStore } from "@/features/buildings/building.store";
import { makeAutoObservable } from "mobx";

export class RootStore {
  authStore: AuthStore;
  buildingStore: BuildingStore;
  constructor() {
    this.authStore = new AuthStore(this);
    this.buildingStore = new BuildingStore(this);
    makeAutoObservable(this);
  }
}

export type TRootStore = RootStore;

export const store = new RootStore();
