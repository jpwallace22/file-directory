import { Node } from "../components/FileTree/fileTree";

const traverseTree = (
  node: Node,
  callback: (node: Node, path: string) => void,
  path = ""
) => {
  callback(node, path);

  if ("children" in node) {
    for (const childNode of node.children) {
      const nodePath = path + "/" + node.name;
      traverseTree(childNode, callback, nodePath);
    }
  }

  return node;
};

export default traverseTree;
