import { appApiInstance, createGuardRequest } from "@/shared";
import { IAuthData, ISignInByPasswordDto } from "./auth.types";

const STORAGE_KEY = "auth";

export const setLocalAuthData = (authData: IAuthData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
};

export const getLocalAuthData = () => {
  var authDataString = localStorage.getItem(STORAGE_KEY);

  if (!authDataString) return null;

  return JSON.parse(authDataString) as IAuthData;
};

export const clearLocalAuthData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const signInByPassword = createGuardRequest(
  (data: ISignInByPasswordDto) =>
    appApiInstance.post<IAuthData>("/auth/sign-in", data)
);
