import { RootStore } from "@/app/rootStore";
import { IManyDeleteOptions, IPageOptions, toArray } from "@/shared";
import { autorun, makeAutoObservable } from "mobx";
import { ICreateRoleDto, IRole } from "./role.types";
import { createRole, deleteRoles, getRoles } from "./role.service";
import {
  IPaginationStore,
  IStoreWithPagination,
  PaginationStore,
} from "../pagination";

interface IErrorMessage {
  code: string;
  description: string;
}

export class RoleStore implements IStoreWithPagination {
  public errors: IErrorMessage[];
  private _roles: IRole[];
  private _pageOptions: IPageOptions;

  public pagination: IPaginationStore;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this);

    this.pagination = new PaginationStore<RoleStore>(this);

    this._roles = [];
    this.errors = [];
    this._pageOptions = {
      pageIndex: 0,
      pageSize: 16,
      pageCount: 0,
      totalCount: 0,
    } as IPageOptions;
  }

  public setPageSize(pageSize: number) {
    this.pageOptions.pageSize = pageSize;
    this.fetchPage();
  }

  public set roles(roles: IRole[]) {
    this._roles = roles;
  }

  public get roles() {
    return this._roles;
  }

  public get pageOptions() {
    return this._pageOptions;
  }

  public set pageOptions(options: IPageOptions) {
    this._pageOptions = options;
  }

  public async fetchPage() {
    const [status, response] = await getRoles(this.pageOptions);

    if (status) {
      this.roles = response.data.items.map((value) => ({
        ...value,
        permissions: [],
      }));
      this.pageOptions = {
        ...this.pageOptions,
        pageCount: response.data.pageCount,
        totalCount: response.data.totalCount,
      };
    }
  }

  public async createRole(options: ICreateRoleDto, loadPage: boolean = true) {
    const [status, response] = await createRole(options);
    if (status) {
      if (loadPage) this.fetchPage();
    } else {
      console.log(response);
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
      console.log("can't delete role(s) for some reason", response);
    }
  }
}
