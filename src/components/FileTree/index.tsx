import TreeNode from "./subComponents/TreeNode";

import { TreeWrapper } from "./fileTree.styles";

import { useContext } from "react";
import FileTreeContext from "../../contexts/FileTreeContext";

const FileTree = () => {
  const { head } = useContext(FileTreeContext);

  return (
    <TreeWrapper>
      <TreeNode node={head} level={0} />
    </TreeWrapper>
  );
};

export default FileTree;
