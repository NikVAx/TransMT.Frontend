import { useStore } from "@/app/rootStore";
import { IActionGuard } from "./actionGuard.types";

export const ActionGuard = ({ permissions, children }: IActionGuard) => {
  const authStore = useStore((store) => store.authStore);

  const predicate = (permission: string) => authStore.hasPermission(permission);

  return permissions.every(predicate) ? children : null;
};
