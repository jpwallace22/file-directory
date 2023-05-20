import { useState } from "react";
import { TreeNodeProps } from "./fileTree";

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  level,
  selectedNode,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    onSelect(node);
  };

  const isDirectory = node.kind === "directory";

  return (
    <div style={{ marginLeft: `${level * 8}px` }}>
      <div
        onClick={handleToggle}
        style={{
          cursor: "pointer",
          fontWeight: isDirectory ? "bold" : "normal",
        }}
      >
        {isDirectory ? (isOpen ? "📂" : "📁") : "📄"}
        {node.name}
      </div>
      {isOpen && isDirectory && (
        <div>
          {node.children.map(child => (
            <TreeNode
              key={child.name}
              node={child}
              level={level + 1}
              selectedNode={selectedNode}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
