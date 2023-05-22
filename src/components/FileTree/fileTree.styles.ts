import { styled } from "styled-components";
import { NodeLabelProps } from "./fileTree";

export const Container = styled.div``;

export const TreeWrapper = styled.div`
  background-color: var(--black);
  height: calc(100vh - 44px);
  padding: 8px 16px;
`;

export const NodeLabel = styled.div<NodeLabelProps>`
  cursor: pointer;
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  padding: 4px 0 4px ${props => 16 + props.level * 8}px;
  font-weight: ${props => (props.kind === "file" ? "thin" : "bold")};
  margin-right: -16px;
  margin-left: -16px;
  border: 1px solid transparent;
  &:hover:not(.root) {
    background-color: var(--dark-gray);
  }
  &.selected:not(.root) {
    background-color: var(--gray);
  }
  &:focus:not(.root) {
    border-color: var(--green);
  }
  &.root {
    cursor: default;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
`;

export const NodeTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
