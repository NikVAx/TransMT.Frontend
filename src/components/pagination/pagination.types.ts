export interface IPaginator {
  goto(page: number): void;
  next(): void;
  prev(): void;
  getPageCount() : number;
  getPage() : number;
}
