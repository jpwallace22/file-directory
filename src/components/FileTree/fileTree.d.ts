type Node = Directory | File;

type SelectedNode = Node & {
  dirPath: string;
  nodePath: string;
};

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
  dirPath: string;
  selected: SelectedNode | null;
  setSelected: Dispatch<SetStateAction<SelectedNode | null>>;
  openDirs: Map<string, number>;
  toggleOpen: (path: string) => void;
}

export interface NodeLabelProps {
  kind: "file" | "directory";
  level: number;
}
