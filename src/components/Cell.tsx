import { useMemo } from 'react';

import { useGameState } from '@/providers/StateContext';

import { getComponentProperties } from './Cell.utils.ts';

interface CellProps {
  onClick: () => void;
  onMouseOut: () => void;
  onMouseOver: (id: string, content: string) => () => void;
  x: number;
  y: number;
}

export const Cell = ({ onClick, onMouseOut, onMouseOver, x, y }: CellProps) => {
  const { state } = useGameState();
  const { id, className, tooltipContent, label } = useMemo(
    () => getComponentProperties(state, x, y),
    [state, x, y],
  );

  return (
    <div
      className={className}
      id={id}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver(id, tooltipContent)}
      role="cell"
    >
      {label}
    </div>
  );
};
