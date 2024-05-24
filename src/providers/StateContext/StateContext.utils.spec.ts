/** @jest-environment node */

import MockDate from 'mockdate';
import Rand from 'rand-seed';

import * as constants from '@/constants';
import {
  Board,
  Direction,
  EventKind,
  GameScore,
  GameState,
  ShipsMap,
} from '@/providers/StateContext/StateContext.types.ts';

import {
  BOARD_SIZE_10,
  BOARD_SIZE_2,
  BOARD_SIZE_5,
  SHIP_FIVE,
  SHIP_FOUR,
  SHIP_FOUR_TEMPLATE,
  SHIP_MAP_ONE,
  SHIP_MAP_ONE_TWO,
  SHIP_MAP_ONE_TWO_THREE,
  SHIP_ONE,
  SHIP_ONE_TEMPLATE,
  SHIP_SIX,
  SHIP_THREE,
  SHIP_THREE_TEMPLATE,
  SHIP_TWO,
  SHIP_TWO_TEMPLATE,
  fillCol,
  fillRow,
} from './StateContext.fixtures.ts';
import {
  calculateScore,
  computeAttack,
  computeGameStats,
  computeShipsPlacement,
  findValidPlacement,
  generateEmptyBoard,
  generateShipsMaps,
  getColsSlice,
  getRowsSlice,
  isVictoryConditionReached,
  placeShip,
  placementAsString,
  randomInt,
} from './StateContext.utils';

const NOW = '2024-05-24T00:00:00.000Z';

jest.mock('@/constants', () => {
  const original = jest.requireActual('@/constants');
  return {
    __esModule: true,
    ...original,
    get LOOP_PROTECTION_LIMIT() {
      return original.LOOP_PROTECTION_LIMIT;
    },
  };
});

afterAll(() => {
  MockDate.reset();
});

beforeEach(() => {
  MockDate.set(NOW);
  jest.resetAllMocks();
});

describe(`randomInt`, () => {
  const rand = new Rand(NOW);
  const cases: TestCasesExtra<typeof randomInt, number> = [
    [1, [rand, 1, 10], 0],
    [2, [rand, 1, 10], 0.1],
    [4, [rand, 1, 10], 0.3],
    [6, [rand, 1, 10], 0.5],
    [10, [rand, 1, 10], 0.9],
  ];

  test.each(cases)('case %#', (expected, input, mockValue) => {
    jest.spyOn(input[0], 'next').mockReturnValue(mockValue);
    expect(randomInt(...input)).toEqual(expected);
  });
});

describe(`generateEmptyBoard`, () => {
  const cases: TestCases<typeof generateEmptyBoard> = [
    [BOARD_SIZE_2, [2]],
    [BOARD_SIZE_5, [5]],
    [BOARD_SIZE_10, [10]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(generateEmptyBoard(...input)).toEqual(expected);
  });

  it(`throws if the size is lower than 2`, () => {
    expect(() => generateEmptyBoard(1)).toThrow('Invalid board size.');
  });
});

describe(`calculateScore`, () => {
  const cases: TestCases<typeof calculateScore> = [
    [{ current: 0, win: 0 }, [{}]],
    [{ current: 0, win: 4 }, [{ 1: SHIP_ONE }]],
    [{ current: 2, win: 4 }, [{ 2: SHIP_TWO }]],
    [{ current: 4, win: 4 }, [{ 3: SHIP_THREE }]],
    [{ current: 4, win: 8 }, [{ 1: SHIP_ONE, 3: SHIP_THREE }]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(calculateScore(...input)).toEqual(expected);
  });
});

describe(`generateShipsMaps`, () => {
  const cases: TestCases<typeof generateShipsMaps> = [
    [SHIP_MAP_ONE, [[SHIP_ONE_TEMPLATE]]],
    [SHIP_MAP_ONE_TWO, [[SHIP_ONE_TEMPLATE, SHIP_TWO_TEMPLATE]]],
    [SHIP_MAP_ONE_TWO_THREE, [[SHIP_ONE_TEMPLATE, SHIP_TWO_TEMPLATE, SHIP_THREE_TEMPLATE]]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(generateShipsMaps(...input)).toEqual(expected);
  });
});

describe(`getRowsSlice`, () => {
  it(`extracts a row from the board`, () => {
    const board = fillRow(BOARD_SIZE_10, 0);
    const slice = { x: 0, y: 0, size: 5 };
    expect(getRowsSlice(board, slice)).toEqual([1, 2, 3, 4, 5]);
  });

  it(`throws if range is out of bounds`, () => {
    const slice = { x: 0, y: 0, size: 11 };
    expect(() => getRowsSlice(BOARD_SIZE_10, slice)).toThrow(
      'getRowsSlice on 0:0 with size 11 is out of bounds.',
    );
  });
});

describe(`getColsSlice`, () => {
  it(`extracts a column from the board`, () => {
    const board = fillCol(BOARD_SIZE_10, 0);
    const slice = { x: 0, y: 0, size: 5 };
    expect(getColsSlice(board, slice)).toEqual([1, 2, 3, 4, 5]);
  });

  it(`throws if range is out of bounds`, () => {
    const slice = { x: 0, y: 0, size: 11 };
    expect(() => getColsSlice(BOARD_SIZE_10, slice)).toThrow(
      'getColsSlice on 0:0 with size 11 is out of bounds.',
    );
  });
});

describe(`findValidPlacement`, () => {
  const withFirstRowTaken = fillRow(BOARD_SIZE_5, 0);
  const withFirstColTaken = fillCol(BOARD_SIZE_5, 0);

  const cases: TestCases<typeof findValidPlacement> = [
    // Out of bounds
    [null, [BOARD_SIZE_5, { direction: Direction.Horizontal, size: 4, x: 5, y: 0 }]],
    [null, [BOARD_SIZE_5, { direction: Direction.Vertical, size: 4, x: 0, y: 5 }]],

    // Row overlap
    [null, [withFirstRowTaken, { direction: Direction.Horizontal, size: 4, x: 0, y: 0 }]],
    [
      { direction: Direction.Horizontal, size: 4, x: 0, y: 1 },
      [withFirstRowTaken, { direction: Direction.Horizontal, size: 4, x: 0, y: 1 }],
    ],
    [null, [withFirstRowTaken, { direction: Direction.Vertical, size: 4, x: 0, y: 0 }]],
    [
      { direction: Direction.Vertical, size: 4, x: 0, y: 1 },
      [withFirstRowTaken, { direction: Direction.Vertical, size: 4, x: 0, y: 1 }],
    ],

    // Column overlap
    [null, [withFirstColTaken, { direction: Direction.Horizontal, size: 4, x: 0, y: 0 }]],
    [
      { direction: Direction.Horizontal, size: 4, x: 1, y: 0 },
      [withFirstColTaken, { direction: Direction.Horizontal, size: 4, x: 1, y: 0 }],
    ],
    [null, [withFirstColTaken, { direction: Direction.Vertical, size: 4, x: 0, y: 0 }]],
    [
      { direction: Direction.Vertical, size: 4, x: 1, y: 0 },
      [withFirstColTaken, { direction: Direction.Vertical, size: 4, x: 1, y: 0 }],
    ],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(findValidPlacement(...input)).toEqual(expected);
  });
});

describe(`placementAsString`, () => {
  const cases: TestCases<typeof placementAsString> = [
    [
      'coords: 5:0, direction: Horizontal, size: 4',
      [{ direction: Direction.Horizontal, size: 4, x: 5, y: 0 }],
    ],
    [
      'coords: 0:5, direction: Vertical, size: 4',
      [{ direction: Direction.Vertical, size: 4, x: 0, y: 5 }],
    ],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(placementAsString(...input)).toEqual(expected);
  });
});

describe(`placeShip`, () => {
  it(`places a ship horizontally`, () => {
    const result = placeShip(BOARD_SIZE_5, 1, {
      direction: Direction.Horizontal,
      size: 4,
      x: 0,
      y: 0,
    });

    expect(result).toEqual([
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it(`places a ship vertically`, () => {
    const result = placeShip(BOARD_SIZE_5, 1, {
      direction: Direction.Vertical,
      size: 4,
      x: 0,
      y: 0,
    });

    expect(result).toEqual([
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it(`throws when the placement is not valid`, () => {
    expect(() =>
      placeShip(BOARD_SIZE_5, 1, {
        direction: Direction.Vertical,
        size: 4,
        x: 0,
        y: 5,
      }),
    ).toThrow('Invalid placement at coords: 0:5, direction: Vertical, size: 4.');
  });
});

describe(`computeShipsPlacement`, () => {
  it(`places all ships on the board`, () => {
    const result = computeShipsPlacement(Date.now(), BOARD_SIZE_5, {
      4: SHIP_FOUR,
      5: SHIP_FIVE,
      6: SHIP_SIX,
    });

    expect(result).toEqual([
      [6, 0, 0, 0, 0],
      [6, 0, 5, 0, 0],
      [6, 0, 5, 4, 0],
      [6, 0, 5, 4, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it(`throws if the loop count exceeds the limit`, () => {
    const limitSpy = jest.spyOn(constants, 'LOOP_PROTECTION_LIMIT', 'get');
    // @ts-expect-error this is only for the test
    limitSpy.mockReturnValue(1);

    expect(() =>
      computeShipsPlacement(Date.now(), BOARD_SIZE_5, {
        4: SHIP_FOUR,
        5: SHIP_FIVE,
        6: SHIP_SIX,
      }),
    ).toThrow('Ship placement is infinite looping.');
  });
});

describe(`computeAttack`, () => {
  let ts: number, shipsMap: ShipsMap, board: Board, score: GameScore, state: GameState;

  beforeEach(() => {
    ts = Date.now();
    shipsMap = generateShipsMaps([SHIP_FOUR_TEMPLATE]);
    board = computeShipsPlacement(ts, BOARD_SIZE_5, shipsMap);
    score = calculateScore(shipsMap);

    // @ts-expect-error skipping type checking for the test
    state = {
      attacksMap: {},
      board,
      log: [],
      score,
      shipsMap,
    };
  });

  test('control test of generated state', () => {
    expect(board).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
    ]);

    expect(score).toEqual({
      current: 0,
      win: 2,
    });

    expect(shipsMap).toEqual({
      '1': {
        hits: 0,
        id: 1,
        name: 'four',
        size: 2,
      },
    });
  });

  describe(`cases`, () => {
    it(`computes misses correctly`, () => {
      const result = computeAttack(state, ts, { x: 4, y: 4 });

      expect(result).toEqual({
        attacksMap: {
          '44': false,
        },
        log: [
          {
            event: {
              type: 'Miss',
              x: 4,
              y: 4,
            },
            ts: 1716508800000,
          },
        ],
        score: {
          current: 0,
          win: 2,
        },
      });
    });

    it(`computes hits correctly`, () => {
      const result = computeAttack(state, ts, { x: 3, y: 2 });

      expect(result).toEqual({
        attacksMap: {
          '23': true,
        },
        log: [
          {
            event: {
              targetId: 1,
              type: 'Hit',
              x: 3,
              y: 2,
            },
            ts: 1716508800000,
          },
        ],
        score: {
          current: 1,
          win: 2,
        },
        shipsMap: {
          '1': {
            hits: 1,
            id: 1,
            name: 'four',
            size: 2,
          },
        },
      });
    });

    it(`computes sinks correctly`, () => {
      const hitResult = computeAttack(state, ts, { x: 3, y: 2 });
      const sinkResult = computeAttack({ ...state, ...hitResult }, ts, { x: 3, y: 3 });

      expect(sinkResult).toEqual({
        attacksMap: {
          '23': true,
          '33': true,
        },
        log: [
          {
            event: {
              targetId: 1,
              type: 'Hit',
              x: 3,
              y: 2,
            },
            ts: 1716508800000,
          },
          {
            event: {
              targetId: 1,
              type: 'Hit',
              x: 3,
              y: 3,
            },
            ts: 1716508800000,
          },
          {
            event: {
              targetId: 1,
              type: 'Sink',
              x: 3,
              y: 3,
            },
            ts: 1716508800000,
          },
        ],
        score: {
          current: 2,
          win: 2,
        },
        shipsMap: {
          '1': {
            hits: 2,
            id: 1,
            name: 'four',
            size: 2,
          },
        },
      });
    });
  });
});

describe(`computeGameStats`, () => {
  it(`calculates the stats based on the game log and score`, () => {
    // @ts-expect-error skipping type checking for the test
    const state: GameState = {
      log: [
        {
          event: {
            type: EventKind.Miss,
            x: 4,
            y: 4,
          },
          ts: 1716508800000,
        },
        {
          event: {
            targetId: 1,
            type: EventKind.Hit,
            x: 3,
            y: 2,
          },
          ts: 1716508800000,
        },
        {
          event: {
            targetId: 1,
            type: EventKind.Hit,
            x: 3,
            y: 3,
          },
          ts: 1716508800000,
        },
        {
          event: {
            targetId: 1,
            type: EventKind.Sink,
            x: 3,
            y: 3,
          },
          ts: 1716508800000,
        },
      ],
      score: {
        current: 2,
        win: 2,
      },
    };

    const result = computeGameStats(state);

    expect(result).toEqual({
      attacks: 3,
      hitRatio: 66.66666666666666,
      hits: 2,
      misses: 1,
      score: 2,
      sunk: 1,
    });
  });

  it(`ignores log events that do not concern the stats`, () => {
    // @ts-expect-error skipping type checking for the test
    const state: GameState = {
      log: [
        {
          event: {
            type: EventKind.Start,
          },
          ts: 1716508800000,
        },
      ],
      score: {
        current: 0,
        win: 2,
      },
    };

    const result = computeGameStats(state);

    expect(result).toEqual({
      attacks: 0,
      hitRatio: 0,
      hits: 0,
      misses: 0,
      score: 0,
      sunk: 0,
    });
  });
});

describe(`isVictoryConditionReached`, () => {
  it(`returns true if the current score matches the win score`, () => {
    // @ts-expect-error skipping type checking for the test
    const state: GameState = {
      score: {
        current: 2,
        win: 2,
      },
    };

    expect(isVictoryConditionReached(state)).toEqual(true);
  });

  it(`returns false otherwise`, () => {
    // @ts-expect-error skipping type checking for the test
    const state: GameState = {
      score: {
        current: 1,
        win: 2,
      },
    };

    expect(isVictoryConditionReached(state)).toEqual(false);
  });
});
