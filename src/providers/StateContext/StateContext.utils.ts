import cloneDeep from 'lodash/cloneDeep';
import Rand from 'rand-seed';

import { LOOP_PROTECTION_LIMIT } from '@/constants';

import {
  Board,
  Coords,
  Direction,
  EventKind,
  GameScore,
  GameState,
  GameStats,
  Placement,
  ShipTemplate,
  ShipsMap,
} from './StateContext.types';

/*
 * Generates a seeded random number between two numbers.
 */
export function randomInt(rand: Rand, min: number, max: number) {
  return Math.floor(rand.next() * (max - min + 1) + min);
}

/*
 * Generates an empty game board of the given size.
 */
export function generateEmptyBoard(size: number): Board {
  const board: Board = [];
  if (size < 2) {
    throw new Error('Invalid board size.');
  }

  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i].push(0);
    }
  }

  return board;
}

/*
 * Calculates the score for the game based on the amount and size of the ships and
 * the amount of hits.
 */
export function calculateScore(shipsMap: ShipsMap): GameScore {
  return Object.values(shipsMap).reduce(
    (acc, ship) => {
      acc.current += ship.hits;
      acc.win += ship.size;
      return acc;
    },
    { current: 0, win: 0 },
  );
}

/*
 * Calculates the required win score based on the amount and size of the ships.
 */
export function generateShipsMaps(ships: ShipTemplate[]): ShipsMap {
  let currentId = 1;
  return ships.reduce<ShipsMap>((acc, ship) => {
    acc[currentId] = { ...ship, id: currentId };
    currentId++;
    return acc;
  }, {});
}

/*
 * Given a set of coordinates and a size, it returns a rows slice of the board.
 */
export function getRowsSlice(board: Board, { x, y, size }: { x: number; y: number; size: number }) {
  if (board[y].length < x + size) {
    throw new Error(`getRowsSlice on ${x}:${y} with size ${size} is out of bounds.`);
  }

  const rows: number[] = [];

  for (let i = 0; i < size; i++) {
    rows.push(board[y][x + i]);
  }

  return rows;
}

/*
 * Given a set of coordinates and a size, it returns a columns slice of the board.
 */
export function getColsSlice(board: Board, { x, y, size }: { x: number; y: number; size: number }) {
  if (board.length < y + size) {
    throw new Error(`getColsSlice on ${x}:${y} with size ${size} is out of bounds.`);
  }

  const cols: number[] = [];

  for (let i = 0; i < size; i++) {
    cols.push(board[y + i][x]);
  }

  return cols;
}

/*
 * Returns a valid placement if a ship can be placed in the desired coordinates,
 * otherwise it returns null.
 */
export function findValidPlacement(board: Board, placement: Placement): Placement | null {
  const { direction, size, x, y } = placement;

  if (direction === Direction.Horizontal) {
    if (x + size > board[y].length) {
      return null;
    }

    const rows = getRowsSlice(board, { x, y, size });
    return rows.some((v) => v !== 0) ? null : placement;
  } else {
    if (y + size > board.length) {
      return null;
    }

    const cols = getColsSlice(board, { x, y, size });
    return cols.some((v) => v !== 0) ? null : placement;
  }
}

/*
 * Returns a string representation of a placement.
 */
export function placementAsString(placement: Placement) {
  const direction = placement.direction === Direction.Horizontal ? 'Horizontal' : 'Vertical';
  return `coords: ${placement.x}:${placement.y}, direction: ${direction}, size: ${placement.size}`;
}

/*
 * Places a ship on the board.
 */
export function placeShip(board: Board, shipId: number, placement: Placement) {
  const verifiedPlacement = findValidPlacement(board, placement);

  if (verifiedPlacement === null) {
    throw new Error(`Invalid placement at ${placementAsString(placement)}.`);
  }

  const newBoard = cloneDeep(board);

  if (placement.direction === Direction.Horizontal) {
    for (let i = placement.x; i < placement.x + placement.size; i++) {
      newBoard[placement.y][i] = shipId;
    }
  } else {
    for (let i = placement.y; i < placement.y + placement.size; i++) {
      newBoard[i][placement.x] = shipId;
    }
  }

  return newBoard;
}

/*
 * Places all ships on the board.
 */
export function computeShipsPlacement(ts: number, board: Board, shipsMap: ShipsMap) {
  let newBoard = cloneDeep(board);
  const rand = new Rand(String(ts));
  const shipIds = Object.values(shipsMap).map((ship) => ship.id);
  let shipId = shipIds.shift();
  let loopCount = 0;

  while (shipId) {
    if (loopCount > LOOP_PROTECTION_LIMIT) {
      throw new Error(`Ship placement is infinite looping.`);
    }

    const x = randomInt(rand, 0, board.length - 1);
    const y = randomInt(rand, 0, board.length - 1);
    const direction = randomInt(rand, 0, 1);
    const ship = shipsMap[shipId];
    const placement = { direction, size: ship.size, x, y };

    try {
      newBoard = placeShip(newBoard, ship.id, placement);
      shipId = shipIds.shift();
    } catch {
      // Errors are expected in this context
    }

    loopCount++;
  }

  return newBoard;
}

/*
 * Computes an attack at the given coordinates.
 */
export function computeAttack(state: GameState, ts: number, coords: Coords) {
  const { attacksMap, board, log, score, shipsMap } = structuredClone(state);
  const [shipId] = getRowsSlice(board, { ...coords, size: 1 });
  const isHit = shipId !== 0;

  attacksMap[`${coords.y}${coords.x}`] = isHit;

  if (!isHit) {
    log.push({
      ts,
      event: {
        ...coords,
        type: EventKind.Miss,
      },
    });

    return {
      attacksMap,
      log,
      score,
    };
  }

  const target = shipsMap[shipId];
  const eventData = {
    ...coords,
    targetId: target.id,
  };

  target.hits++;

  log.push({
    ts,
    event: {
      ...eventData,
      type: EventKind.Hit,
    },
  });

  if (target.hits >= target.size) {
    log.push({
      ts,
      event: {
        ...eventData,
        type: EventKind.Sink,
      },
    });
  }

  return {
    attacksMap,
    log,
    score: calculateScore(shipsMap),
    shipsMap,
  };
}

/*
 * Aggregates the game stats.
 */
export function computeGameStats(state: GameState): GameStats {
  const stats = state.log.reduce(
    (acc, entry) => {
      switch (entry.event.type) {
        case EventKind.Miss:
          acc.attacks++;
          acc.misses++;
          break;
        case EventKind.Hit:
          acc.attacks++;
          acc.hits++;
          break;
        case EventKind.Sink:
          acc.sunk++;
          break;
        default:
          break;
      }

      return acc;
    },
    { attacks: 0, hitRatio: 0, hits: 0, misses: 0, score: 0, sunk: 0 },
  );

  stats.hitRatio = stats.attacks > 0 ? (stats.hits / (stats.hits + stats.misses)) * 100 : 0;
  stats.score = state.score.current;

  return stats;
}

/*
 * Checks if the victory condition for the game has been reached.
 */
export function isVictoryConditionReached(state: GameState) {
  return state.score.current === state.score.win;
}
