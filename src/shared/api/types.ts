export interface IPageRequestOptions {
  pageIndex: number;
  pageSize: number;
}

export type IPaginatedRequest<T = any> = IPageRequestOptions & T;

export interface IPaginatedResponse<T> {
  items: T[];
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
}

export interface IGeoPoint {
  lng: number;
  lat: number;
}

export interface IManyDeleteOptions<TKey = string> {
  keys: TKey[] | TKey;
}

export interface IManyDeleteRequestOptions<TKey = string> {
  keys: TKey[];
}
