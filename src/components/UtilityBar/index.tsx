import type { Node } from '../FileTree/fileTree';
import type { UseFileTreeUtils } from '../FileTree/hooks/useFileTree';
import type { UseOpenDirUtils } from '../FileTree/hooks/useOpenDirectory';
import type { FC } from 'react';

import { ReactComponent as Collapse } from '../../assets/icons/collapse-all.svg';
import { ReactComponent as Expand } from '../../assets/icons/expand-all.svg';
import { ReactComponent as NewFile } from '../../assets/icons/new-file.svg';
import { ReactComponent as NewDir } from '../../assets/icons/new-folder.svg';
import Tooltip from '../../molecules/Tooltip';
import { getBranchDir } from '../FileTree/utils/getDirectory';
import { UtilBarWrapper } from './utilityBar.styles';

interface UtilityBarProps extends UseOpenDirUtils, UseFileTreeUtils {
  head: Node;
}

const UtilityBar: FC<UtilityBarProps> = ({
  head,
  closeAllDirs,
  openAllDirs,
  openDir,
  selected,
  addNode,
  setSelected,
}) => {
  const iconSize = 20;
  const iconStyles = {
    height: iconSize,
    width: iconSize,
    cursor: 'pointer',
  };

  const handleAdd = (kind: Node['kind']) => {
    const selectedDir = getBranchDir(selected);

    openDir(selectedDir);
    const newNode = addNode(selectedDir, kind);
    setSelected(newNode);
  };

  return (
    <UtilBarWrapper>
      <Tooltip label="Collapse All">
        <Collapse onClick={closeAllDirs} {...iconStyles} />
      </Tooltip>
      <Tooltip label="Expand All">
        <Expand onClick={() => openAllDirs(head)} {...iconStyles} />
      </Tooltip>
      <Tooltip label="New File">
        <NewFile onClick={() => handleAdd('file')} {...iconStyles} />
      </Tooltip>
      <Tooltip label="New Directory">
        <NewDir onClick={() => handleAdd('directory')} {...iconStyles} />
      </Tooltip>
    </UtilBarWrapper>
  );
};

export default UtilityBar;
