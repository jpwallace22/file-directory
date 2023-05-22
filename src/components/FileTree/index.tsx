import classNames from 'classnames';

import type { TreeNodeProps } from './fileTree';
import type { FC, MouseEvent } from 'react';

import { NodeLabel, NodeTitle } from './fileTree.styles';
import getLabelIcon from './utils/getLabelIcon';

const TreeNode: FC<TreeNodeProps> = ({ node, level, dirPath, openDirs, toggleOpen, selected, setSelected }) => {
  const isDirectory = node.kind === 'directory';
  const nodePath = dirPath + '/' + node.name;
  const isSelected = nodePath === selected?.nodePath;
  const isOpen = openDirs?.has(nodePath);
  const isRoot = level === -1;

  const handleClick = (e?: MouseEvent) => {
    e?.stopPropagation();

    const selectedNode = {
      ...node,
      dirPath,
      nodePath,
    };

    setSelected(selectedNode);
    if (isDirectory) {
      toggleOpen(nodePath);
    }
  };

  return (
    <>
      <NodeLabel
        draggable
        tabIndex={0}
        onClick={e => handleClick(e)}
        onKeyDown={e => e.key === 'Enter' && handleClick()}
        kind={node.kind}
        level={level}
        className={classNames({ selected: isSelected, root: isRoot })}
      >
        {!isRoot && <div>{getLabelIcon(node, isOpen)}</div>}
        <NodeTitle>{node.name}</NodeTitle>
      </NodeLabel>
      {isDirectory && isOpen && (
        <>
          {node.children
            .sort(child => (child.kind === 'directory' ? -1 : 1))
            .map(child => (
              <TreeNode
                key={child.name}
                node={child}
                level={level + 1}
                dirPath={nodePath}
                openDirs={openDirs}
                toggleOpen={toggleOpen}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
        </>
      )}
    </>
  );
};

export default TreeNode;
