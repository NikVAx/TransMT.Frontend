import { useSidePanelStateTree } from "../../context/sidebar.hooks";
import { ReactTreeNode } from "../node";

export function SidePanelTree() {
  const { tree } = useSidePanelStateTree();

  return (
    <>
      {tree.children.map((node) => (
        <ReactTreeNode node={node} key={node.value.link} />
      ))}
    </>
  );
}
