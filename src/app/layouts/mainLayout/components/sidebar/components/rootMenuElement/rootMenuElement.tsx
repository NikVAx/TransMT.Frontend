import { PropsWithChildren, useEffect, useReducer, useRef } from "react";
import { ISidebarNode } from "../../context/sidebar.context";
import { CSSTransition } from "react-transition-group";
import styles from "./rootMenuElement.module.css";


export const LinkMenuElement = ({ node }: { node: ISidebarNode }) => {
  return (
    <div style={{ paddingLeft: 10 + 10 * node.deepIndex }}>
      <a>
        {node.value.text}
      </a>
    </div>
  );
};

export const CollapseMenuElement = ({ node }: { node: ISidebarNode }) => {
  const [_, update] = useReducer(() => ({}), {});

  useEffect(() => node._observer.subscribe(update), [node._observer]);

  const handleOpen = () => {
    node._update({
      isOpen: !node._state.isOpen,
    });
  };

  const nodeRef = useRef(null);

  return (
    <div>
      <div
        style={{ paddingLeft: 10 + 10 * node.deepIndex }}
        onClick={handleOpen}
      >
        {node.value.text}
        {node._state.isOpen ? "-" : "+"}
      </div>

      <CSSTransition
        nodeRef={nodeRef}
        timeout={{ enter: 1000, exit: 500 }}
        classNames={{
          enterActive: styles.layoutSubmenuEnterActive,
          enterDone: styles.layoutSubmenuEnterDone,
          exit: styles.layoutSubmenuExit,
          exitActive: styles.layoutSubmenuExitActive,
        }}

        in={node._state.isOpen}
        key={node.value.link + "-csst"}
      >
        <div
          className={styles.divStyle}
          style={{ flexDirection: "column", display: "flex" }}
          ref={nodeRef}
        >
          {node.children.map((childNode) => (
            <MenuElement node={childNode} key={childNode.value.link} />
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export const MenuElement = ({ node }: { node: ISidebarNode }) => {
  if (node.children.length !== 0) {
    return <CollapseMenuElement node={node} />;
  }
  return <LinkMenuElement node={node} />;
};

export const RootMenuElement = ({ node }: { node: ISidebarNode }) => {
  return (
    <>
      <div style={{ fontWeight: 700, paddingLeft: 10 }}>
        {node.value.text}
      </div>
      {node.children.length !== 0
        ? node.children.map((child) => {
            return <MenuElement node={child} key={child.value.link} />;
          })
        : null}
    </>
  );
};
