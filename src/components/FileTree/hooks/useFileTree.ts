import { useCallback, useEffect, useState } from 'react';

import type { Maybe } from '../../../utils/typeUtils';
import type { File, Node, SelectedNode } from '../fileTree';

import data from '../../../mockData';
import traverseTree from '../../../utils/traverseTree';
import createNewNode from '../utils/createNewNode';
import { getParentDir } from '../utils/getDirectory';

export const ROOT_PATH = '/' + data.name;

const useFileTree = () => {
  const [head, setHead] = useState<Node>(data);
  const [selected, setSelected] = useState<Maybe<SelectedNode>>(null);
  const [openFile, setOpenFile] = useState<Maybe<File>>(null);
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

  const addNode = (directory: string, kind: 'file' | 'directory') => {
    const newNode = createNewNode(directory, kind);
    if (!newNode) {
      return null;
    }

    const updatedTree = traverseTree(head, (node, path) => {
      const dirPath = path + '/' + node.name;
      if (node.kind === 'directory' && dirPath === directory) {
        const newChildren = [newNode, ...node.children];
        node.children = newChildren;
      }
    });

    setHead({ ...updatedTree });
    return newNode;
  };

  const removeNode = useCallback(
    (directory: Maybe<string>, name?: Maybe<string>, options?: { overrideConfirmation?: boolean }) => {
      if (!name || !directory) {
        return;
      }

      if (!options?.overrideConfirmation) {
        const confirm = window.confirm(`Are you sure you want to delete "${name}"?`);
        if (!confirm) {
          return;
        }
      }

      const updatedTree = traverseTree(head, (node, path) => {
        const dirPath = path + '/' + node.name;

        if (node.kind === 'directory' && dirPath === directory) {
          const newChildren = [...node.children.filter(child => child.name !== name)];
          node.children = newChildren;
        }
      });

      setHead({ ...updatedTree });
    },
    [head],
  );

  const deleteNode = useCallback(
    (e: KeyboardEvent) => {
      const focusedElement = document.activeElement as HTMLElement;
      if (e.key === 'Delete' && focusedElement.getAttribute('kind')) {
        removeNode(getParentDir(selected), selected?.name);
      }
    },
    [selected, removeNode],
  );

  useEffect(() => {
    if (selected?.kind === 'file') {
      setOpenFile(selected);
    }

    window.addEventListener('keydown', deleteNode);
    return () => {
      window.removeEventListener('keydown', deleteNode);
    };
  }, [selected, deleteNode]);

  return [
    head,
    new Map([[ROOT_PATH, 1], ...openDirs]),
    { openFile, selected, setSelected, addNode, removeNode, openDir, closeDir, toggleOpen, closeAllDirs, openAllDirs },
  ] as const;
};

export type UseFileTreeUtils = ReturnType<typeof useFileTree>[2];

export default useFileTree;
