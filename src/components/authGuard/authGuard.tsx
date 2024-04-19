import { useStore } from "@/app/rootStore";
import { observer } from "mobx-react-lite";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthGuard = observer(({ children }: PropsWithChildren) => {
  const authStore = useStore((store) => store.authStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStore.isAuthenticated()) {
      navigate("/login");
    }
  }, [authStore.isAuthenticated()]);

  return <>{children}</>;
});
