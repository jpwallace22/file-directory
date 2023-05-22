import { Node, SelectedNode } from "../fileTree";

/**
 * Prompts for a name and creates a new node with that name
 * @param directory string of directory where the new node is being added
 * @param kind file or directory
 * @returns new SelectedNode
 */
const createNewNode = (
  directory: string,
  kind: Node["kind"]
): SelectedNode | null => {
  const nodeName = window.prompt(`New ${kind} name?`);
  if (!nodeName) {
    return null;
  }
  const baseNode = {
    name: nodeName,
    kind,
    modified: new Date().toString(),
    size: "0kb",
    dirPath: directory,
    nodePath: directory + "/" + nodeName,
  };

  return kind === "directory"
    ? ({ ...baseNode, children: [] } as SelectedNode)
    : (baseNode as SelectedNode);
};

export default createNewNode;
