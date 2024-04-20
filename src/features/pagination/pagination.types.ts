import { IPaginator } from "@/components";
import { IPageOptions } from "@/shared";

export interface IPaginationStore extends IPaginator {
  setCount(pageCount: number, totalCount: number) : void;
  options: IPageOptions;
}

export interface IStoreWithPagination {
  fetchPage(): void;
  pagination: IPaginationStore;
}
