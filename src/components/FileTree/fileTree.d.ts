import type { Maybe } from '../../utils/typeUtils';
import type { UseFileTreeUtils } from './hooks/useFileTree';
import type { UseOpenDirUtils } from './hooks/useOpenDirectory';

type Node = Directory | File;

type SelectedNode = Node & {
  dirPath: string;
  nodePath: string;
};

export interface File {
  name: string;
  kind: 'file';
  size: string;
  modified: string;
  path?: string;
}

export interface Directory {
  name: string;
  kind: 'directory';
  children: Node[];
}

export interface TreeNodeProps {
  node: Node;
  level: number;
  dirPath: string;
  selected: Maybe<SelectedNode>;
  setSelected: Dispatch<SetStateAction<Maybe<SelectedNode>>>;
  openDirs: Map<string, number>;
  toggleOpen: (path: string) => void;
}

export interface NodeLabelProps {
  kind: Node['kind'];
  level: number;
}

export interface FileTreeProps extends UseFileTreeUtils, UseOpenDirUtils {
  head: Node;
  openDirs: Map<string, number>;
}
