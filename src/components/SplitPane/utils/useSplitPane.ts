import { useCallback, useEffect, useState } from 'react';

import { MINIMUM_FILETREE_WIDTH } from '../../../utils/constants';

const useSplitPane = () => {
  const [dragging, setDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState<number>(MINIMUM_FILETREE_WIDTH);
  const [dividerPosition, setDividerPosition] = useState<number>(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setDividerPosition(e.clientX);
    setDragging(true);
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX } = e;
      if (dragging) {
        const newLeftWidth = leftWidth + clientX - dividerPosition;

        if (newLeftWidth < MINIMUM_FILETREE_WIDTH) {
          setLeftWidth(MINIMUM_FILETREE_WIDTH);
          setDividerPosition(clientX - (leftWidth || 0) + MINIMUM_FILETREE_WIDTH);
        } else {
          setLeftWidth(newLeftWidth);
          setDividerPosition(clientX);
        }
      }
    },
    [dragging, dividerPosition, leftWidth],
  );

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, onMouseMove]);

  return [
    leftWidth,
    dragging,
    {
      onMouseDown,
      onMouseUp,
    },
  ] as const;
};

export default useSplitPane;
