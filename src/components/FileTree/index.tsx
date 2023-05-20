import React, { useState } from "react";
import type { FileTreeProps, Folder, File } from "./fileTree";
import TreeNode from "./TreeNode";

const FileTree: React.FC<FileTreeProps> = ({ data }) => {
  const [selectedNode, setSelectedNode] = useState<Folder | File | null>(null);

  const handleSelect = (node: Folder | File) => {
    setSelectedNode(node);
  };

  return (
    <>
      <TreeNode
        node={data}
        level={0}
        selectedNode={selectedNode}
        onSelect={handleSelect}
      />
    </>
  );
};

export default FileTree;
