import { makeAutoObservable, runInAction } from "mobx";
import { signInByPassword } from "./auth.service";
import { IAuthData, ISignInOptions } from "./auth.types";
import { RootStore } from "@/app/rootStore/rootStore";

enum STORAGE_KEYS {
  ACCESS_TOKEN = "accessToken",
  USER = "user",
}

export class AuthStore {
  public isLoading: boolean;
  private _data: IAuthData;
  private _permissions: string[];

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);
    this._data = {
      user: null,
      accessToken: null,
    };
    this._permissions = [];
    this.isLoading = true;
    this.loadCachedData();
  }

  public isAuthenticated() {
    return this._data.user != null;
  }

  public hasPermission(requiredPermission: string) {
    return this._permissions.some(
      (permission) => permission === requiredPermission
    );
  }

  public hasEveryPermission(permissions: string[]) {
    return permissions.every((requiredPermission) =>
      this.hasPermission(requiredPermission)
    );
  }

  public loadCachedData() {
    const data = this.readAuthDataFromLocalStorage();
    if (data !== null) {
      this._data = data;
      this._permissions = this.mapFlatDistinctUserPermissions();
      this.isLoading = false;
      return true;
    }
    return false;
  }

  public async login(data: ISignInOptions) {
    this.isLoading = true;
    const [status, response] = await signInByPassword(data);
    if (status) {
      runInAction(() => {
        this._data = response.data;
        this.permissions = this.mapFlatDistinctUserPermissions();
        this.saveAuthDataToLocalStorage();
      });
    } else {
      runInAction(() => {
        this._data.user = null;
      });
    }

    this.isLoading = false;
  }

  public get permissions() {
    return this._permissions;
  }

  private set permissions(thisPermissions: string[]) {
    this._permissions = thisPermissions;
  }

  public getUser() {
    if (!this._data.user) {
      throw new Error("Check the user is authenticated before get user");
    }

    return this._data.user;
  }

  public logout() {
    this.clearAuthDataFromLocalStorage();
  }

  private mapFlatDistinctUserPermissions() {
    return [
      ...new Set(
        this._data.user?.roles.flatMap((value) => value.permissions) as string[]
      ),
    ];
  }

  private readAuthDataFromLocalStorage() {
    const accessTokenString = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const userString = localStorage.getItem(STORAGE_KEYS.USER);
    if (accessTokenString && userString) {
      return {
        accessToken: accessTokenString,
        user: JSON.parse(userString),
      } as IAuthData;
    }
    return null;
  }

  private saveAuthDataToLocalStorage() {
    if (this._data.accessToken && this._data.user) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, this._data.accessToken);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(this._data.user));
    }
  }

  private clearAuthDataFromLocalStorage() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    this._data.accessToken = null;
    this._data.user = null;
  }
}
