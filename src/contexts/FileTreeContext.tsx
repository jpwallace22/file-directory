import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Directory } from "../components/FileTree/fileTree";
import data from "../mockData";

interface IFileTreeContext {
  head: Directory;
  allDirOpen: { open: boolean; priority: boolean };
  setAllDirOpen: Dispatch<SetStateAction<{ open: boolean; priority: boolean }>>;
  setHead: Dispatch<SetStateAction<Directory>>;
}

const FileTreeContext = createContext<IFileTreeContext>({
  head: data,
} as IFileTreeContext);

export const FileTreeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [head, setHead] = useState<Directory>(data);
  const [allDirOpen, setAllDirOpen] = useState<{
    open: boolean;
    priority: boolean;
  }>({ open: false, priority: false });

  return (
    <FileTreeContext.Provider
      value={{ head, allDirOpen, setAllDirOpen, setHead }}
    >
      {children}
    </FileTreeContext.Provider>
  );
};

export default FileTreeContext;
