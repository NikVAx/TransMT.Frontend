import { RootStore } from "@/app/rootStore";
import { IPageRequestOptions } from "@/shared";
import { makeAutoObservable, runInAction } from "mobx";
import { IRole } from "./role.types";
import { getRoles } from "./role.service";

export class RoleStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);
    this.roles = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 12,
    } as IPageRequestOptions;
    this.isLoading = true;
  }

  public roles: IRole[];

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

    const [status, response] = await getRoles(this.pageOptions);

    runInAction(async () => {
      if (status) {
        this.roles = response.data.items.map((value) => ({
          ...value,
          permissions: [],
        }));
      }
      this.isLoading = false;
    });
  }
}
