import { useEffect, useState } from "react";
import data from "../../../mockData";
import { File, Node } from "../fileTree";

const useFileTree = () => {
  const [selected, setSelected] = useState<Node | null>(null);
  const [openFile, setOpenFile] = useState<File | null>(null);

  useEffect(() => {
    if (selected?.kind !== "file") {
      return;
    }
    setOpenFile(selected);
  }, [selected]);

  return [data, { openFile, selected, setSelected }] as const;
};

export default useFileTree;
