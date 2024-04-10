import { makeAutoObservable, runInAction } from "mobx";
import {
  clearLocalAuthData,
  getLocalAuthData,
  setLocalAuthData,
  signInByPassword,
} from "./auth.services";
import { IAuthData, ISignInOptions } from "./auth.types";

class AuthStore {
  private _isAuth: boolean;
  private _authData: IAuthData;

  isLoading: boolean;

  constructor() {
    makeAutoObservable(this);

    this._authData = {
      user: null,
      accessToken: null,
    };

    this._isAuth = false;
    this.isLoading = true;
  }

  public isAuthenticated() {
    if (!this._authData.user) {
      this._isAuth = false;
    }

    return this._isAuth;
  }

  public getUser() {
    if (!this._authData.user) {
      throw new Error("Check the user is authenticated before get user");
    }

    return this._authData.user;
  }

  public async signIn(data: ISignInOptions) {
    const [status, response] = await signInByPassword(data);

    if (status) {
      runInAction(() => {
        console.log("Success", response.data);
        this._authData = response.data;
        this._isAuth = true;
        setLocalAuthData(response.data);
      });
    } else {
      this._isAuth = false;
    }

    this.isLoading = false;
  }

  public signOut() {
    clearLocalAuthData();
    this._isAuth = false;
    this._authData.accessToken = null;
    this._authData.user = null;
  }

  public loadCachedData() {
    const data = getLocalAuthData();
    if (data !== null) {
      this._isAuth = true;
      this._authData = data;
    }
  }
}

export const authStore = new AuthStore();
