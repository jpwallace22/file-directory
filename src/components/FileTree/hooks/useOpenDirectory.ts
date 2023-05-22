import { useState } from 'react';

import type { Node } from '../fileTree';

import traverseTree from '../../../utils/traverseTree';
import { ROOT_PATH } from './useFileTree';

const useOpenDirectories = () => {
  const [openDirs, setOpenDirs] = useState<Map<string, number>>(new Map());

  const openDir = (path: string) => {
    openDirs.set(path, 1);
    setOpenDirs(openDirs);
  };

  const closeDir = (path: string) => {
    openDirs.delete(path);
    setOpenDirs(openDirs);
  };

  const toggleOpen = (path: string) => {
    if (openDirs.has(path)) {
      closeDir(path);
    } else {
      openDir(path);
    }
  };

  const closeAllDirs = () => {
    const newState = new Map(openDirs);
    newState.clear();
    setOpenDirs(newState);
  };

  const openAllDirs = (head: Node) => {
    const newState = new Map(openDirs);
    traverseTree(head, (_, path) => {
      newState.set(path, 1);
    });
    setOpenDirs(newState);
  };

  return [
    new Map([[ROOT_PATH, 1], ...openDirs]),
    { openDir, closeDir, toggleOpen, closeAllDirs, openAllDirs },
  ] as const;
};

export type UseOpenDirUtils = ReturnType<typeof useOpenDirectories>[1];

export default useOpenDirectories;
