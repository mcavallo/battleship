import { GameAction, GameActionKind, GameState } from './StateContext.types';

export const DEFAULT_MOCKED_STATE: GameState = {
  attacksMap: {},
  board: [],
  hasGameEnded: false,
  hasGameStarted: false,
  isDebug: false,
  log: [],
  shipsMap: {},
  score: {
    current: 0,
    win: 0,
  },
};

export const INTROSPECTION_ACTION: GameAction = {
  type: GameActionKind.Introspection,
};

export const INTROSPECTION_STATE: GameState = DEFAULT_MOCKED_STATE;
