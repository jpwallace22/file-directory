import { FC } from "react";
import { Node } from "../FileTree/fileTree";
import { UtilBarWrapper } from "./utilityBar.styles";
import { ReactComponent as Collapse } from "../../assets/icons/collapse-all.svg";
import { ReactComponent as Expand } from "../../assets/icons/expand-all.svg";
import Tooltip from "../../molecules/Tooltip";

interface UtilityBarProps {
  head: Node;
  closeAllDirs: () => void;
  openAllDirs: (head: Node) => void;
}

const UtilityBar: FC<UtilityBarProps> = ({
  head,
  closeAllDirs,
  openAllDirs,
}) => {
  const iconSize = 20;
  const iconStyles = {
    height: iconSize,
    width: iconSize,
    cursor: "pointer",
  };

  return (
    <UtilBarWrapper>
      <Tooltip label="Collapse All">
        <Collapse onClick={closeAllDirs} {...iconStyles} />
      </Tooltip>
      <Tooltip label="Expand All">
        <Expand onClick={() => openAllDirs(head)} {...iconStyles} />
      </Tooltip>
    </UtilBarWrapper>
  );
};

export default UtilityBar;
