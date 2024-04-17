import { RootStore } from "@/app/rootStore";
import { IPageRequestOptions } from "@/shared";
import { makeAutoObservable, runInAction } from "mobx";
import { IUser } from "./user.types";
import { getUsers } from "./user.service";

export class UserStore {
  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this.users = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 12,
    } as IPageRequestOptions;
    this.isLoading = true;
  }

  public users: IUser[];

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

    const [status, response] = await getUsers(this.pageOptions);

    runInAction(async () => {
      if (status) {
        this.users = response.data.items;
      }
      this.isLoading = false;
    });
  }
}
