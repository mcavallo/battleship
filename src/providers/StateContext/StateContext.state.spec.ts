import MockDate from 'mockdate';

import { gameReducer, getInitialState } from './StateContext.state';
import { GameAction, GameActionKind } from './StateContext.types';
import { calculateScore } from './StateContext.utils';

const NOW = '2024-05-24T00:00:00.000Z';

jest.mock('./StateContext.utils', () => {
  const original = jest.requireActual('./StateContext.utils');
  return {
    __esModule: true,
    ...original,
    calculateScore: jest.fn().mockImplementation(original.calculateScore),
  };
});

afterAll(() => {
  MockDate.reset();
});

beforeEach(() => {
  MockDate.set(NOW);
});

describe(`getInitialState`, () => {
  it(`returns the default initial state`, () => {
    expect(getInitialState()).toMatchSnapshot();
  });
});

describe(`gameReducer`, () => {
  describe(`fallback`, () => {
    it('returns the state unchanged for unhandled actions', () => {
      const initialState = getInitialState();
      const unknownAction = {
        type: 'UNKNOWN',
      };
      const result = gameReducer(initialState, unknownAction as GameAction);

      expect(result).toEqual(initialState);
    });
  });

  describe(`AttackAction`, () => {
    it(`computes the new state correctly`, () => {
      const initialState = getInitialState();
      const result = gameReducer(initialState, {
        type: GameActionKind.Attack,
        payload: {
          ts: Date.now(),
          coords: {
            x: 0,
            y: 0,
          },
        },
      });

      expect(result).toMatchSnapshot();
    });

    it(`skips the attack if the cell was already attacked`, () => {
      const initialState = getInitialState();
      initialState.attacksMap['00'] = true;

      let result = gameReducer(initialState, {
        type: GameActionKind.Attack,
        payload: {
          ts: Date.now(),
          coords: {
            x: 0,
            y: 0,
          },
        },
      });

      expect(result).toEqual(initialState);

      initialState.attacksMap['00'] = false;

      result = gameReducer(initialState, {
        type: GameActionKind.Attack,
        payload: {
          ts: Date.now(),
          coords: {
            x: 0,
            y: 0,
          },
        },
      });

      expect(result).toEqual(initialState);
    });

    it('runs the EndAction when the win condition is met', () => {
      (calculateScore as jest.Mock).mockReturnValueOnce({
        current: 13,
        win: 13,
      });

      const initialState = getInitialState();
      const result = gameReducer(initialState, {
        type: GameActionKind.Attack,
        payload: {
          ts: Date.now(),
          coords: {
            x: 0,
            y: 0,
          },
        },
      });

      expect(result).toMatchSnapshot();
    });
  });

  describe(`EndAction`, () => {
    it(`computes the new state correctly`, () => {
      const initialState = getInitialState();
      const result = gameReducer(initialState, {
        type: GameActionKind.End,
        payload: {
          ts: Date.now(),
        },
      });

      expect(result).toMatchSnapshot();
    });
  });

  describe(`StartAction`, () => {
    it(`computes the new state correctly`, () => {
      const initialState = getInitialState();
      const result = gameReducer(initialState, {
        type: GameActionKind.Start,
        payload: {
          ts: Date.now(),
        },
      });

      expect(result).toMatchSnapshot();
    });

    it(`preserves the isDebug value`, () => {
      const initialState = getInitialState();
      expect(initialState.isDebug).toEqual(false);

      initialState.isDebug = true;

      const result = gameReducer(initialState, {
        type: GameActionKind.Start,
        payload: {
          ts: Date.now(),
        },
      });

      expect(initialState.isDebug).toEqual(true);
      expect(result.isDebug).toEqual(true);
    });
  });

  describe(`ToggleDebugAction`, () => {
    it(`computes the new state correctly`, () => {
      const initialState = getInitialState();
      const result = gameReducer(initialState, {
        type: GameActionKind.ToggleDebug,
      });

      expect(initialState.isDebug).toEqual(false);
      expect(result).toMatchSnapshot();
    });
  });
});
