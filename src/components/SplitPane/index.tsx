import useSplitPane from "./uitls/useSplitPane";
import { Divider, FlexWrapper, LeftPane, RightPane } from "./splitPane.styles";

import { FC, useContext } from "react";
import type { SplitPaneProps } from "./splitPane";
import FileTreeContext from "../../contexts/FileTreeContext";

const SplitPane: FC<SplitPaneProps> = ({ left, right }) => {
  const { setAllDirOpen } = useContext(FileTreeContext);
  const [leftWidth, { onMouseDown, onMouseUp, onTouchStart }] = useSplitPane();

  return (
    <FlexWrapper>
      <LeftPane width={leftWidth}>{left}</LeftPane>
      <Divider
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      />
      <RightPane>
        <button onClick={() => setAllDirOpen({ open: true, priority: true })}>
          open
        </button>
        <button onClick={() => setAllDirOpen({ open: false, priority: true })}>
          close
        </button>
        {right}
      </RightPane>
    </FlexWrapper>
  );
};

export default SplitPane;
