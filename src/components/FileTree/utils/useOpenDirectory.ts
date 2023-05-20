import { useContext, useState } from "react";
import FileTreeContext from "../../../contexts/FileTreeContext";

const useOpenDirectory = () => {
  const { allDirOpen, setAllDirOpen } = useContext(FileTreeContext);
  const [localOpen, setLocalOpen] = useState(allDirOpen.open);

  const isOpen = () => (allDirOpen.priority ? allDirOpen.open : localOpen);

  const toggleOpen = () => {
    setAllDirOpen({ ...allDirOpen, priority: false });
    setLocalOpen(prev => !prev);
  };

  return [isOpen, { toggleOpen }] as const;
};

export default useOpenDirectory;
