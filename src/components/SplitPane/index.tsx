

import classNames from 'classnames';

import type { SplitPaneProps } from './splitPane';
import type { FC } from 'react';

import { Divider, FlexWrapper, LeftPane, RightPane } from './splitPane.styles';
import useSplitPane from './uitls/useSplitPane';

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
