import { SelectedNode } from "../fileTree";
import { ROOT_PATH } from "../hooks/useFileTree";

/**
 * Returns current selected directory
 * @param node SelectedNode
 * @returns path
 */
export const getBranchDir = (node?: SelectedNode | null) => {
  if (!node) {
    return ROOT_PATH;
  }

  return node.kind === "directory" ? node.nodePath : node.dirPath;
};

/**
 * return the parent directory with a nullcheck
 * @param node SelectedNode
 * @returns parent directory or null
 */
export const getParentDir = (node?: SelectedNode | null) => {
  if (!node) {
    return null;
  }

  return node.dirPath;
};
