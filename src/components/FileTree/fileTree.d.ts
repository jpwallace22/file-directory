type Node = Directory | File;

export interface File {
  name: string;
  kind: "file";
  size: string;
  modified: string;
  path?: string;
}

export interface Directory {
  name: string;
  kind: "directory";
  children: Node[];
}

export interface TreeNodeProps {
  node: Node;
  level: number;
  path: string;
  selected: Node | null;
  setSelected: Dispatch<SetStateAction<Node | null>>;
  openDirs: Map<string, number>;
  toggleOpen: (path: string) => void;
}

export interface NodeLabelProps {
  kind: "file" | "directory";
  level: number;
}
