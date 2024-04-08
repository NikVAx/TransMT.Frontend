import { PropsWithChildren, useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import s from "./accordion.module.css";
import { ISideButtonAccordion } from "./accordion.types";
import { getAllRoutesWithoutId } from "@/shared";
import { Flex } from "@adobe/react-spectrum";

export function SidePanelAccordion({
  node,
  children,
}: PropsWithChildren<ISideButtonAccordion>) {
  const navigate = useNavigate();
  const [_, update] = useReducer(() => ({}), {});
  const { pathname } = useLocation();

  const handleOpen = () => {
    node._update({
      isOpen: !node._state.isOpen,
    });
    if (node.value.link !== "/") navigate(node.value.link);
  };

  useEffect(() => node._observer.subscribe(update), [node._observer]);

  return (
    <div className={s.accordionContainer}>
      <Flex direction="column">
        <div
          onClick={handleOpen}
          className={clsx(s.accordionTitle, {
            [s.accordionActive]:
              getAllRoutesWithoutId(pathname).includes(node.value.link) &&
              node.value.link === "/",
          })}
        >
          <p>{node.value.text}</p>
          {/* <Box className={clsx(s.icon, { [s.isActiveIcon]: node._state.isOpen })}>
       <Icon name="arrow" />
     </Box> */}
        </div>

        {node._state.isOpen && <Flex direction="column"><div className={s.accordionChildren}>{children}</div></Flex>}
      </Flex>
    </div>
  );
}
