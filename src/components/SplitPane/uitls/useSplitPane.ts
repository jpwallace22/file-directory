import { useEffect, useState } from "react";
import { MINIMUM_FILETREE_WIDTH } from "../../../utils/constants";

const useSplitPane = () => {
  const [dragging, setDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState<number>(MINIMUM_FILETREE_WIDTH);
  const [dividerPosition, setDividerPosition] = useState<number | undefined>(
    undefined
  );

  const onMouseDown = (e: React.MouseEvent) => {
    setDividerPosition(e.clientX);
    setDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setDividerPosition(e.touches[0].clientX);
    setDragging(true);
  };

  const onMove = (clientX: number) => {
    if (dragging && dividerPosition !== undefined) {
      const newLeftWidth = leftWidth + clientX - dividerPosition;

      if (newLeftWidth !== undefined) {
        if (newLeftWidth < MINIMUM_FILETREE_WIDTH) {
          setLeftWidth(MINIMUM_FILETREE_WIDTH);
          setDividerPosition(
            clientX - (leftWidth || 0) + MINIMUM_FILETREE_WIDTH
          );
        } else {
          setLeftWidth(newLeftWidth);
          setDividerPosition(clientX);
        }
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    onMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    onMove(e.touches[0].clientX);
  };

  const onMouseUp = () => {
    setDividerPosition(undefined);
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchend", onMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  return [
    leftWidth,
    {
      dragging,
      onMouseDown,
      onTouchStart,
      onMouseUp,
    },
  ] as const;
};

export default useSplitPane;
