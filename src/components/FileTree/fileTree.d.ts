export interface File {
  name: string;
  kind: "file";
  size: string;
  modified: string;
}

export interface Folder {
  name: string;
  kind: "directory";
  children: (Folder | File)[];
}

export interface TreeNodeProps {
  node: Folder | File;
  level: number;
  selectedNode: Folder | File | null;
  onSelect: (node: Folder | File) => void;
}

export interface FileTreeProps {
  data: Folder;
}
