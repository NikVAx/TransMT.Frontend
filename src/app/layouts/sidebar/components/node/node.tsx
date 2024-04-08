import { ISidebarNode } from "../../context/sidebar.context";
import { SidePanelAccordion } from "../accordion";
import { SidePanelButton } from "../button";

export function ReactTreeNode({ node }: { node: ISidebarNode }) {
  if (node.children.length !== 0) {
    return (
      <SidePanelAccordion node={node}>
        {node.children.map((childNode) => (
          <ReactTreeNode node={childNode} key={childNode.value.link} />
        ))}
      </SidePanelAccordion>
    );
  }
  return <SidePanelButton node={node}>{node.value.text}</SidePanelButton>;
}
