import classNames from 'classnames';

import { GameState, Ship } from '@/providers/StateContext/StateContext.types';

/**
 * Computes the cell label.
 */
export function getLabel(isDebug: boolean, isHit: boolean, ship: Ship | null, cellValue: number) {
  if (!isDebug && !isHit) {
    return '';
  }

  return String(ship?.size ? ship.size : cellValue);
}

/**
 * Computes the content of the regular tooltip.
 */
export function getTooltipContent(isHit: boolean, ship: Ship | null) {
  if (!ship || !isHit) {
    return '';
  }

  return ship.name;
}

/**
 * Computes the content of the debug tooltip.
 */
export function getDebugTooltipContent(ship: Ship | null) {
  return ship?.name && ship?.id ? `${ship.name} #${ship.id}` : '';
}

/**
 * Computes the properties for the cell.
 */
export function getComponentProperties(state: GameState, x: number, y: number) {
  const value = state.board[y][x];
  const hit = state.attacksMap?.[`${y}${x}`];
  const isHit = hit === true;
  const ship = state.shipsMap?.[value];

  const className = classNames({
    cell: true,
    taken: value !== 0,
    available: hit === undefined,
    hit: isHit,
    miss: hit === false,
  });

  return {
    id: `cell-${y}${x}`,
    className,
    label: getLabel(state.isDebug, isHit, ship, value),
    tooltipContent: state.isDebug ? getDebugTooltipContent(ship) : getTooltipContent(isHit, ship),
  };
}
