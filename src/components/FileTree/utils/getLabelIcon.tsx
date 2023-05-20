import type { Node } from "../fileTree";
import { ReactComponent as Folder } from "../../../assets/icons/folder.svg";
import { ReactComponent as OpenFolder } from "../../../assets/icons/folder-opened.svg";

const getLabelIcon = (node: Node, isOpen: boolean) => {
  if (node.kind === "directory") {
    return isOpen ? <OpenFolder /> : <Folder />;
  }

  return "📄";
};

export default getLabelIcon;
