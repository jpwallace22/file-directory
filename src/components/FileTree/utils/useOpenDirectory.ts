import { useState } from "react";
import { Node } from "../fileTree";
import traverseTree from "../../../utils/traverseTree";

const useOpenDirectories = () => {
  const [openDirs, setOpenDirs] = useState<Map<string, number>>(new Map());

  const toggleDirOpen = (path: string) => {
    const newState = new Map(openDirs);
    if (openDirs.has(path)) {
      newState.delete(path);
    } else {
      newState.set(path, 1);
    }
    setOpenDirs(newState);
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

  return [openDirs, { toggleDirOpen, closeAllDirs, openAllDirs }] as const;
};

export default useOpenDirectories;
