
import { IPageOptions } from "@/shared";
import { IPaginationStore, IStoreWithPagination } from "./pagination.types";

export class PaginationStore<TSourceStore extends IStoreWithPagination>
  implements IPaginationStore
{
  private _store: TSourceStore;

  public options : IPageOptions;

  constructor(public store: TSourceStore) {
    this._store = store;
    this.options = {
      pageSize: 0,
      pageIndex: 0,
      pageCount: 0,
      totalCount: 0
    }
  }

  public goto(page: number) {
    this._store.pageOptions.pageIndex = page;
    this._store.fetchPage();
  }

  public next() {
    this._store.pageOptions.pageIndex += 1;
    this._store.fetchPage();
  }

  public prev() {
    this._store.pageOptions.pageIndex -= 1;
    this._store.fetchPage();
  }

  public setPageSize(size: number) {
    this._store.pageOptions.pageSize = size;
    this._store.fetchPage();
  }

  public getPageCount() {
    return this._store.pageOptions.pageCount;
  }

  public getPage() {
    return this._store.pageOptions.pageIndex + 1;
  }
}
