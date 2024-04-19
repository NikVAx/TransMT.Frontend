import { IPaginator } from "@/components";
import { IPageOptions } from "@/shared";

export interface IPaginationStore extends IPaginator {
  options: IPageOptions;
}

export interface IStoreWithPagination {
  pageOptions: IPageOptions;
  fetchPage(): void;
  pagination: IPaginationStore;
}
