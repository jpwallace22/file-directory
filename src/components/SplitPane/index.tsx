import useSplitPane from "./uitls/useSplitPane";
import { Divider, FlexWrapper, LeftPane, RightPane } from "./splitPane.styles";

import type { FC } from "react";
import type { SplitPaneProps } from "./splitPane";

const SplitPane: FC<SplitPaneProps> = ({ left, right }) => {
  const [leftWidth, { onMouseDown, onMouseUp, onTouchStart }] = useSplitPane();

  return (
    <FlexWrapper>
      <LeftPane width={leftWidth}>{left}</LeftPane>
      <Divider
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      />
      <RightPane>{right}</RightPane>
    </FlexWrapper>
  );
};

export default SplitPane;
