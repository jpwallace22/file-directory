import type { FileTreeProps } from './fileTree';
import type { FC } from 'react';

import { TreeWrapper } from './fileTree.styles';
import TreeNode from './TreeNode';
import UtilityBar from './UtilityBar';

const FileTree: FC<FileTreeProps> = props => {
  return (
    <>
      <UtilityBar {...props} />
      <TreeWrapper onClick={() => props.setSelected(null)}>
        <TreeNode
          dirPath=""
          level={-1} // set to -1 so root has negative margin
          node={props.head}
          {...props}
        />
      </TreeWrapper>
    </>
  );
};

export default FileTree;
