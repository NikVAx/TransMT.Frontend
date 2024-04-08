export interface IMenuItem {
  text: string;
  link: string;
  items: IMenuItem[] | null;
}
