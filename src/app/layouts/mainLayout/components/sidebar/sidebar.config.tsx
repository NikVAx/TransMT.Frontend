import { ITreeNode, TreeNode } from "@/shared";
import { IMenuItem } from "./sidebar.types";

// function TreeNode(
//   title: string,
//   link: string,
//   items: null | ITreeNode<IMenuItem>[] = null
// ) {
//   return {
//     text: title,
//     link: link,
//     items: items,
//   };
// }

export const sidebarConfig: ITreeNode<IMenuItem>[] = [
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
