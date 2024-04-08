import { IMenuItem } from "./sidebar.types";

function createMenuItem(
  title: string,
  link: string,
  items: null | IMenuItem[] = null
) {
  return {
    text: title,
    link: link,
    items: items,
  };
}

export const config: IMenuItem[] = [
  createMenuItem("Геозоны", "#geozones", [
    createMenuItem("Создать", "geozones/create"),
    createMenuItem("Карта геозон", "geozones"),
  ]),
  createMenuItem("Операторы", "#operators", [
    createMenuItem("Создать", "operators/create"),
    createMenuItem("Все операторы", "operators"),
  ]),
  createMenuItem("Здания", "#buildings", [
    createMenuItem("Создать", "buildings/create"),
    createMenuItem("Список зданий", "buildings"),
  ]),
  createMenuItem("Транспорт", "#vehicles", [
    createMenuItem("Создать", "vehicles/create"),
    createMenuItem("Список ТС", "vehicles"),
  ]),
  createMenuItem("Учетные записи", "#users", [
    createMenuItem("Пользователи", "users"),
    createMenuItem("Роли", "roles"),
  ]),
];
