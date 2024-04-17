import { appApiInstance, createGuardRequest } from "@/shared";
import { IAuthData, ISignInByPasswordDto } from "./auth.types";

export const signInByPassword = createGuardRequest(
  (data: ISignInByPasswordDto) =>
    appApiInstance.post<IAuthData>("/auth/sign-in", data)
);
