import {
  AuthStore,
  BuildingStore,
  GeoZoneStore,
  PermissionStore,
  RoleStore,
  UserStore,
} from "@/features";
import { makeAutoObservable } from "mobx";

export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  roleStore: RoleStore;
  permissionStore: PermissionStore;
  buildingStore: BuildingStore;
  geoZoneStore: GeoZoneStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.buildingStore = new BuildingStore(this);
    this.geoZoneStore = new GeoZoneStore(this);
    this.roleStore = new RoleStore(this);
    this.permissionStore = new PermissionStore(this);
    makeAutoObservable(this);
  }
}

export type TRootStore = RootStore;

export const store = new RootStore();
