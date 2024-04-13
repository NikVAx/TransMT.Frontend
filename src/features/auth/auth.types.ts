export type ISignInOptions = ISignInByPasswordDto;

export interface ISignInByPasswordDto {
  username: string;
  password: string;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface IRole {
  id: string;
  name: string;
  permissions: string[]
}

export interface IUserWithRoles extends IUser {
  roles: IRole[];
}

export interface IAuthData {
  user: IUserWithRoles | null;
  accessToken: string | null;
}
