
import { IPageOptions } from "@/shared";
import { IPaginationStore, IStoreWithPagination } from "./pagination.types";
import { makeAutoObservable } from "mobx";

export class PaginationStore<TSourceStore extends IStoreWithPagination>
  implements IPaginationStore
{
  private _options : IPageOptions;

  constructor(public store: TSourceStore) {
    this._options = {
      pageSize: 20,
      pageIndex: 0,
      pageCount: 0,
      totalCount: 0
    }
    makeAutoObservable(this);
  }

  public setCount(pageCount: number, totalCount: number) {
    this._options.pageCount = pageCount;
    this._options.totalCount = totalCount;
  }

  public goto(page: number) {
    this._options.pageIndex = page;
  }

  public next() {
    this._options.pageIndex += 1;
  }

  public prev() {
    this._options.pageIndex -= 1;
  }

  public get hasNext() {
    return this._options.pageIndex + 1 < this._options.pageCount;
  }

  public get hasPrev() {
    return this._options.pageIndex > 0;
  }

  public setPageSize(size: number) {
    this._options.pageSize = size;
  }

  public getPageCount() {
    return this._options.pageCount;
  }

  public getPage() {
    return this._options.pageIndex + 1;
  }

  public get options() {
    return this._options;
  }
}
