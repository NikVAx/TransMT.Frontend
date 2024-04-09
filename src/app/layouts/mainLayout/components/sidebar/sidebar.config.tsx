import { ITreeNode, TreeNode } from "@/shared";
import { IMenuItem } from "./sidebar.types";

export const sidebarConfig: ITreeNode<IMenuItem>[] = [
  TreeNode({ text: "Справочники", link: "/" }, [
    TreeNode({ text: "Геозоны", link: "/geozones" }),
    TreeNode({ text: "Транспортные средства", link: "/vehicles" }),
    TreeNode({ text: "Операторы ТС", link: "/operators" }),
    TreeNode({ text: "Здания и сооружения", link: "/buildings" }),
  ]),
  TreeNode({ text: "Мониторинг", link: "/" }, [
    TreeNode({ text: "Карта", link: "/monitoring/map" }),
    TreeNode({ text: "Статусы движения", link: "/monitoring/status" }),
    TreeNode({ text: "Активность операторов", link: "/monitoring/operators" }),
  ]),
  TreeNode({ text: "Отчеты", link: "/" }, [
    TreeNode({ text: "Отчет об активности ТС", link: "/reports/activity" }),
  ]),
  TreeNode({ text: "Геозоны", link: "/" }, [
    TreeNode({ text: "Создать", link: "/geozones/create" }),
    TreeNode({ text: "Карта геозон", link: "/geozones/map" }),
  ]),
  TreeNode({ text: "Операторы", link: "/" }, [
    TreeNode({ text: "Создать", link: "/operators/create" }),
    TreeNode({ text: "Все операторы", link: "/operators/list" }),
  ]),
  TreeNode({ text: "Здания", link: "/" }, [
    TreeNode({ text: "Создать", link: "/buildings/create" }),
    TreeNode({ text: "Список зданий", link: "/buildings/list" }),
  ]),
  TreeNode({ text: "Транспорт", link: "/" }, [
    TreeNode({ text: "Создать", link: "/vehicles/create" }),
    TreeNode({ text: "Список ТС", link: "/vehicles/list" }),
  ]),
  TreeNode({ text: "Учётные записи", link: "/" }, [
    TreeNode({ text: "Пользователи", link: "/users/list" }),
    TreeNode({ text: "Роли", link: "/users/roles" }),
  ]),
];
