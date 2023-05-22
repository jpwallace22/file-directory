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

  const add = (kind: Node['kind']) => {
    const selectedDir = getBranchDir(selected);

    openDir(selectedDir);
    const newNode = addNode(selectedDir, kind);
    setSelected(newNode);
  };

  const iconMap = [
    {
      image: Collapse,
      label: 'Collapse All',
      action: () => closeAllDirs(),
    },
    {
      image: Expand,
      label: 'Expand All',
      action: () => openAllDirs(head),
    },
    {
      image: NewFile,
      label: 'New File',
      action: () => add('file'),
    },
    {
      image: NewDir,
      label: 'New Directory',
      action: () => add('directory'),
    },
  ];

  return (
    <UtilBarWrapper>
      {iconMap.map(icon => (
        <Tooltip key={icon.label} label={icon.label}>
          <icon.image onClick={icon.action} height={iconSize} width={iconSize} cursor="pointer" />
        </Tooltip>
      ))}
    </UtilBarWrapper>
  );
};

export default UtilityBar;
