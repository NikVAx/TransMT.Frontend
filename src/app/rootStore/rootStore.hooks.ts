import { StoreContext } from "./rootStore.context";
import { RootStore } from "./rootStore";
import { useContext } from "react";

export const useStore = <Selected = unknown>(
  selector: (store: RootStore) => Selected
) => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "Wrap in StoreProvider"
    );
  }
  return selector(context);
};