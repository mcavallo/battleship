import { BOARD_SIZE } from '@/constants';

import {
  EventKind,
  GameAction,
  GameActionKind,
  GameState,
  ShipTemplate,
} from './StateContext.types';
import {
  calculateScore,
  computeAttack,
  computeGameStats,
  computeShipsPlacement,
  generateEmptyBoard,
  generateShipsMaps,
} from './StateContext.utils.ts';

export const BATTLESHIP_TEMPLATE: ShipTemplate = {
  name: 'Battleship',
  hits: 0,
  size: 5,
} as const;

export const DESTROYER_TEMPLATE: ShipTemplate = {
  name: 'Destroyer',
  hits: 0,
  size: 4,
} as const;

export function getInitialState(): GameState {
  const shipsMap = generateShipsMaps([BATTLESHIP_TEMPLATE, DESTROYER_TEMPLATE, DESTROYER_TEMPLATE]);

  return {
    attacksMap: {},
    board: generateEmptyBoard(BOARD_SIZE),
    hasGameEnded: false,
    hasGameStarted: false,
    isDebug: false,
    log: [],
    shipsMap,
    score: calculateScore(shipsMap),
  } as const;
}

export function gameReducer(state: GameState, action: GameAction) {
  // @ts-expect-error dont mind this here!
  console.log(`@[${action.type}]`, action.payload!);

  switch (action.type) {
    case GameActionKind.Attack: {
      const newState = structuredClone(state);
      const { ts, coords } = action.payload;

      const computedState = {
        ...newState,
        ...computeAttack(newState, ts, coords),
      };

      if (computedState.score.current === computedState.score.win) {
        return gameReducer(computedState, {
          type: GameActionKind.End,
          payload: {
            ts,
          },
        });
      }

      return computedState;
    }

    case GameActionKind.End: {
      const newState = structuredClone(state);
      const { log } = newState;
      const { ts } = action.payload;

      return {
        ...newState,
        hasGameEnded: true,
        log: log.concat({
          ts,
          event: {
            stats: computeGameStats(newState),
            type: EventKind.End,
          },
        }),
      };
    }

    case GameActionKind.Start: {
      const newState = structuredClone(getInitialState());
      const { board, shipsMap, log } = newState;
      const { ts } = action.payload;

      return {
        ...newState,
        board: computeShipsPlacement(ts, board, shipsMap),
        hasGameStarted: true,
        log: log.concat({
          ts,
          event: {
            type: EventKind.Start,
          },
        }),
        isDebug: state.isDebug,
      };
    }

    case GameActionKind.ToggleDebug: {
      return {
        ...state,
        isDebug: !state.isDebug,
      };
    }

    default:
      return state;
  }
}
