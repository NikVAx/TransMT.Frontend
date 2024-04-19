import { ITreeNode, TreeNode } from "@/shared";
import { IMenuItem } from "../layouts/mainLayout/components/sidebar/sidebar.types";

export const sidebarConfig: ITreeNode<IMenuItem>[] = [
  TreeNode({ text: "Справочники", link: "#entities" }, [
    TreeNode({ text: "Геозоны", link: "/entities/geozones" }),
    TreeNode({ text: "Транспортные средства", link: "/entities/vehicles" }),
    TreeNode({ text: "Операторы ТС", link: "/entities/operators" }),
    TreeNode({ text: "Здания и сооружения", link: "/entities/buildings" }),
  ]),
  TreeNode({ text: "Мониторинг", link: "#monitoring" }, [
    TreeNode({ text: "Карта", link: "/monitoring/map" }),
  ]),
  TreeNode({ text: "События", link: "#events" }, [
    TreeNode({ text: "Журнал событий", link: "/events/list" }),
    TreeNode({ text: "Настройки", link: "/events/manage" }),
  ]),
  TreeNode({ text: "Отчеты", link: "#reports" }, [
    TreeNode({ text: "Отчет о событиях", link: "/reports/events" }),
  ]),
  TreeNode({ text: "Учётные записи", link: "#accounts" }, [
    TreeNode({ text: "Пользователи", link: "/accounts/users" }),
    TreeNode({ text: "Роли", link: "/accounts/roles" }),
  ]),
];
