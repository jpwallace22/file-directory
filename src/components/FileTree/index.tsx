import classNames from "classnames";
import { TreeNodeProps } from "./fileTree";
import { NodeLabel, NodeTitle } from "./fileTree.styles";
import getLabelIcon from "./utils/getLabelIcon";

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  level,
  path,
  openDirs,
  toggleOpen,
  selected,
  setSelected,
}) => {
  const isDirectory = node.kind === "directory";
  const nodePath = path + node.name;
  const isSelected = node === selected;
  const isOpen = openDirs?.has(nodePath);

  const handleLabelClick = () => {
    setSelected(node);
    if (isDirectory) {
      toggleOpen(nodePath);
    }
  };

  return (
    <>
      <NodeLabel
        tabIndex={0}
        onClick={handleLabelClick}
        onKeyDown={e => e.key === "Enter" && handleLabelClick()}
        kind={node.kind}
        level={level}
        className={classNames({ selected: isSelected })}
      >
        <div>{getLabelIcon(node, isOpen)}</div>
        <NodeTitle>{node.name}</NodeTitle>
      </NodeLabel>
      {isDirectory && isOpen && (
        <>
          {node.children
            .sort(child => (child.kind === "directory" ? -1 : 1))
            .map(child => (
              <TreeNode
                key={child.name}
                node={child}
                level={level + 1}
                path={nodePath + "/"}
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
