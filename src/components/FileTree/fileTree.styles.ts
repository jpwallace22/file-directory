import { styled } from "styled-components";
import { NodeLabelProps } from "./fileTree";

export const TreeWrapper = styled.div`
  background-color: var(--black);
  height: 100vh;
  padding: 16px;
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
  &:hover {
    background-color: var(--dark-gray);
  }
`;

export const NodeTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
