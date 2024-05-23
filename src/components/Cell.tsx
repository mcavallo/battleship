import classNames from 'classnames';
import { useMemo } from 'react';

import { useGameState } from '@/providers/StateContext';

interface CellProps {
  onClick: () => void;
  onMouseOut: () => void;
  onMouseOver: (id: string, content: string) => () => void;
  x: number;
  y: number;
}

export const Cell = ({ onClick, onMouseOut, onMouseOver, x, y }: CellProps) => {
  const { state } = useGameState();
  const { elementId, isAvailable, isHit, isMiss, isTaken, tooltipContent, label } = useMemo(() => {
    const value = state.board[y][x];
    const hit = state.attacksMap?.[`${y}${x}`];
    const ship = value === 0 ? null : state.shipsMap[value];
    const isDebug = state.isDebug;
    const isHit = hit === true;
    const isMiss = hit === false;
    const isTaken = value !== 0;

    return {
      elementId: `cell-${y}${x}`,
      isAvailable: hit === undefined,
      isHit,
      isMiss,
      isTaken,
      label: isDebug || isHit ? (ship ? ship.size : value) : '',
      tooltipContent: isDebug || isHit ? (ship ? ship.name : '') : '',
    };
  }, [x, y, state]);

  const cellClass = classNames({
    cell: true,
    taken: isTaken,
    available: isAvailable,
    hit: isHit,
    miss: isMiss,
  });

  return (
    <div
      className={cellClass}
      id={elementId}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver(elementId, tooltipContent)}
    >
      {label}
    </div>
  );
};
