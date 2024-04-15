import { RootStore } from "@/app/rootStore";
import { makeAutoObservable, runInAction } from "mobx";
import { IPermission } from "./permission.types";
import { getPermissions } from "./permission.service";

export class PermissionStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);
    this.permissions = [];
    this.isLoading = true;
  }

  public permissions: IPermission[];

  public isLoading: boolean;

  public async fetchPermissions() {
    runInAction(() => {
      this.isLoading = true;
    });

    const [status, response] = await getPermissions();

    runInAction(async () => {
      if (status) {
        this.permissions = response.data;
      }
      this.isLoading = false;
    });
  }
}
