import { useStore } from "@/app/rootStore";
import { IActionGuard } from "./actionGuard.types";
import { observer } from "mobx-react-lite";

export const ActionGuard = observer(({ permissions, children }: IActionGuard) => {
  const authStore = useStore((store) => store.authStore);

  return authStore.hasEveryPermission(permissions) ? children : null;
});
