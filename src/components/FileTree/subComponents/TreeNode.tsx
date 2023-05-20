import { TreeNodeProps } from "../fileTree";
import { NodeLabel, NodeTitle } from "../fileTree.styles";
import getLabelIcon from "../utils/getLabelIcon";
import useOpenDirectory from "../utils/useOpenDirectory";

const TreeNode: React.FC<TreeNodeProps> = ({ node, level }) => {
  const [isOpen, { toggleOpen }] = useOpenDirectory();

  const isDirectory = node.kind === "directory";

  return (
    <>
      <NodeLabel onClick={toggleOpen} kind={node.kind} level={level}>
        <div>{getLabelIcon(node, isOpen())}</div>
        <NodeTitle>{node.name}</NodeTitle>
      </NodeLabel>
      {isOpen() && isDirectory && (
        <div>
          {node.children
            .sort(child => (child.kind === "directory" ? -1 : 1))
            .map(child => (
              <TreeNode key={child.name} node={child} level={level + 1} />
            ))}
        </div>
      )}
    </>
  );
};

export default TreeNode;
