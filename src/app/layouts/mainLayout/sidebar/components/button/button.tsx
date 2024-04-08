import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import s from "./button.module.css";
import { ISidePanelButtonProps } from "./button.types";
import { useActiveRoute } from "../../context/sidebar.hooks";

export function SidePanelButton({
  node,
  children,
}: PropsWithChildren<ISidePanelButtonProps>) {
  const navigate = useNavigate();
  const routes = useActiveRoute();

  const handleNavigate = () => {
    navigate(node.value.link);
  };

  return (
    <button
      type="button"
      onClick={handleNavigate}
      className={clsx(s.button, {
        [s.buttonContainer]: node.deepIndex === 0,
        [s.buttonActive]: routes.includes(node.value.link),
      })}
    >
      <span>{children}</span>
    </button>
  );
}
