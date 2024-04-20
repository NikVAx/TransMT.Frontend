import { RootStore } from "@/app/rootStore";
import { IManyDeleteOptions, toArray } from "@/shared";
import { autorun, makeAutoObservable } from "mobx";
import { ICreateRoleDto, IRole } from "./role.types";
import { createRole, deleteRoles, getRoleById, getRoles } from "./role.service";
import {
  IPaginationStore,
  IStoreWithPagination,
  PaginationStore,
} from "../pagination";


enum STATUS {
  WAIT, // wait any actions
  LOADING, // executing action
  ERROR, // complite action with error, when handled have to set wait
  SUCCESS, // // complite action with success, when handled have to set wait
}

export class RoleStore implements IStoreWithPagination {
  public pagination: IPaginationStore;

  private _roles: IRole[];

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this.pagination = new PaginationStore<RoleStore>(this);

    autorun(() => {
      this.fetchPage();
    });

    this._roles = [];
  }

  public set roles(roles: IRole[]) {
    this._roles = roles;
  }

  public get roles() {
    return this._roles;
  }

  public async fetchPage() {
    const [status, response] = await getRoles(this.pagination.options);

    if (status) {
      this.roles = response.data.items.map((value) => ({
        ...value,
        permissions: [],
      }));
      this.pagination.setCount(
        response.data.pageCount,
        response.data.totalCount
      );
    }
  }

  public async getRoleById(id: string) {
    const [status, response] = await getRoleById(id);
    if (status) {
      return response.data;
    } else {
      return null;
    }
  }

  public async createRole(options: ICreateRoleDto) {
    const [status, response] = await createRole(options);
    if (status) {
      return response.data;
    } else {
      return null;
    }
  }

  public async deleteRoles(
    options: IManyDeleteOptions,
    loadPage: boolean = true
  ) {
    const [status, response] = await deleteRoles({
      keys: toArray(options.keys),
    });

    if (status) {
      if (loadPage) this.fetchPage();
    } else {
      console.log("NOT IMPLEMENTED ERROR HANDLER", response);
    }
  }
}
