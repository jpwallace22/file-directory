import type { Node } from "../fileTree";
import { ReactComponent as Folder } from "../../../assets/icons/folder.svg";
import { ReactComponent as OpenFolder } from "../../../assets/icons/folder-opened.svg";

/**
 * Returns correct icon based on node type and state
 * @param node Filetree Node
 * @param isOpen boolean
 * @returns JSXElement
 */
const getLabelIcon = (node: Node, isOpen: boolean) => {
  if (node.kind === "directory") {
    return isOpen ? <OpenFolder /> : <Folder />;
  }

  // TODO: get better icon for files
  return "📄";
};

export default getLabelIcon;
