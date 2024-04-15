import { IRole } from "../roles";
import { IUser } from "../users";

export type ISignInOptions = ISignInByPasswordDto;

export interface ISignInByPasswordDto {
  username: string;
  password: string;
}

export interface IUserWithRoles extends IUser {
  roles: IRole[];
}

export interface IAuthData {
  user: IUserWithRoles | null;
  accessToken: string | null;
}
