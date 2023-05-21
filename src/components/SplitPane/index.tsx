import useSplitPane from "./uitls/useSplitPane";
import { Divider, FlexWrapper, LeftPane, RightPane } from "./splitPane.styles";

import { FC } from "react";
import type { SplitPaneProps } from "./splitPane";
import classNames from "classnames";

const SplitPane: FC<SplitPaneProps> = ({ left, right }) => {
  const [leftWidth, { dragging, onMouseDown, onMouseUp, onTouchStart }] =
    useSplitPane();

  return (
    <FlexWrapper>
      <LeftPane width={leftWidth}>{left}</LeftPane>
      <Divider
        className={classNames({ dragging })}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      />
      <RightPane>{right}</RightPane>
    </FlexWrapper>
  );
};

export default SplitPane;
