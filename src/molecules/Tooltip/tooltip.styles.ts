import { styled } from 'styled-components';

export const TooltipStyles = styled.div`
  position: relative;
  transition-delay: 1s;
  &::after {
    left: 50%;
    opacity: 0;
    position: absolute;
    z-index: -100;
    transition-delay: 1s;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1) translateY(0);
    z-index: 1000;
    transition-delay: 1s;
  }

  &::after {
    white-space: nowrap;
    background: var(--gray);
    font-size: 0.75rem;
    top: 100%;
    color: var(--white);
    content: attr(data-tip);
    padding: 4px 8px;
    transition: all 0.65s ease;
    transform: translateY(50%);
    width: fit-content;
  }

  &:hover::after,
  &:focus::after {
    transition: all 0.3s ease 0.5s;
  }
`;
