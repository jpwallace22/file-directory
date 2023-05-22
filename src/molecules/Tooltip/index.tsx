import type { FC, ReactNode } from 'react';

import { TooltipStyles } from './tooltip.styles';

interface TooltipProps {
  label: string;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ label, children }) => <TooltipStyles data-tip={label}>{children}</TooltipStyles>;

export default Tooltip;
