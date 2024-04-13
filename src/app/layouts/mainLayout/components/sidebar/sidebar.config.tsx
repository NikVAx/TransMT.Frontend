import { ITreeNode, TreeNode } from "@/shared";
import { IMenuItem } from "./sidebar.types";

export const sidebarConfig: ITreeNode<IMenuItem>[] = [
  TreeNode({ text: "Справочники", link: "#dictionaries" }, [
    TreeNode({ text: "Геозоны", link: "/geozones" }),
    TreeNode({ text: "Транспортные средства", link: "/vehicles" }),
    TreeNode({ text: "Операторы ТС", link: "/operators" }),
    TreeNode({ text: "Здания и сооружения", link: "/buildings" }),
  ]),
  TreeNode({ text: "Мониторинг", link: "#monitoring" }, [
    TreeNode({ text: "Карта", link: "/monitoring/map" }),
    TreeNode({ text: "Статусы движения", link: "/monitoring/status" }),
    TreeNode({ text: "Активность операторов", link: "/monitoring/operators" }),
  ]),
  TreeNode({ text: "События", link: "#events" }, [
    TreeNode({ text: "Журнал событий", link: "/events/list" }),
    TreeNode({ text: "Управление событиями", link: "/events/manage" }),
  ]),
  TreeNode({ text: "Отчеты", link: "#reports" }, [
    TreeNode({ text: "Отчет об активности ТС", link: "/reports/activity" }),
    TreeNode({ text: "Отчет по геозонам", link: "/reports/geozones" }),
    TreeNode({ text: "Отчет о событиях", link: "/reports/events" }),
  ]),
  TreeNode({ text: "Учётные записи", link: "#identities" }, [
    TreeNode({ text: "Пользователи", link: "/identities/list" }),
    TreeNode({ text: "Роли", link: "/identities/roles" }),
  ]),
];
