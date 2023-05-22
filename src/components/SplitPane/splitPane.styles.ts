import { styled } from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
`;

export const LeftPane = styled.div<{ width: number }>`
  flex: 0 0 ${props => props.width}px;
  overflow: auto;
`;

export const RightPane = styled.div`
  flex: 1;
  overflow: auto;
`;

export const DividerHitBox = styled.div`
  width: 8px;
  cursor: col-resize;
`;

export const Divider = styled.div`
  cursor: col-resize;
  width: 8px;
  transition: 0s background-color;
  height: 100vh;
  &:hover {
    background-color: var(--green);
    transition-delay: 0.5s;
  }
  &.dragging {
    background-color: var(--green);
  }
`;
