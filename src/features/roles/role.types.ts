export interface IRole {
  id: string;
  name: string;
  permissions: string[];
}
export interface IGetRoleDto extends Omit<IRole, "permissions"> {}
export interface ICreateRoleDto extends IRole {}
