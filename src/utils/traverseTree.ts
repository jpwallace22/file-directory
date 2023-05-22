import type { Node } from '../components/FileTree/fileTree';

/**
 * traverses a tree structure and runs a callback on each node
 * @param node TreeNode
 * @param callback (Node, string) => void called on EVERY node
 * @param path optional path
 * @returns Head
 */
const traverseTree = (node: Node, callback: (node: Node, path: string) => void, path = '') => {
  callback(node, path);

  if ('children' in node) {
    for (const childNode of node.children) {
      const nodePath = path + '/' + node.name;
      traverseTree(childNode, callback, nodePath);
    }
  }

  return node;
};

export default traverseTree;
