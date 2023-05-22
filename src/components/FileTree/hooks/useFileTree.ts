import { useCallback, useEffect, useState } from 'react';

import type { File, Node, SelectedNode } from '../fileTree';

import data from '../../../mockData';
import traverseTree from '../../../utils/traverseTree';
import createNewNode from '../utils/createNewNode';
import { getParentDir } from '../utils/getDirectory';

export const ROOT_PATH = '/' + data.name;

const useFileTree = () => {
  const [head, setHead] = useState<Node>(data);
  const [selected, setSelected] = useState<SelectedNode | null>(null);
  const [openFile, setOpenFile] = useState<File | null>(null);

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
    (directory: string | null, name?: string | null, options?: { overrideConfirmation?: boolean }) => {
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

  return [head, { openFile, selected, setSelected, addNode, removeNode }] as const;
};

export type UseFileTreeUtils = ReturnType<typeof useFileTree>[1];

export default useFileTree;
