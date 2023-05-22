import classNames from 'classnames';

import type { FC, ReactNode } from 'react';

import { Divider, FlexWrapper, LeftPane, RightPane } from './splitPane.styles';
import useSplitPane from './utils/useSplitPane';

export interface SplitPaneProps {
  className?: string;
  left: ReactNode;
  right: ReactNode;
}

const SplitPane: FC<SplitPaneProps> = ({ left, right }) => {
  const [leftWidth, dragging, { ...mouseActions }] = useSplitPane();

  return (
    <FlexWrapper>
      <LeftPane width={leftWidth}>{left}</LeftPane>
      <Divider className={classNames({ dragging })} {...mouseActions} />
      <RightPane>{right}</RightPane>
    </FlexWrapper>
  );
};

export default SplitPane;
