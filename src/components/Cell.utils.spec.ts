import { SHIP_ONE, SHIP_SEVEN } from '@/providers/StateContext/StateContext.fixtures';
import { GameState } from '@/providers/StateContext/StateContext.types.ts';
import { generateShipsMaps } from '@/providers/StateContext/StateContext.utils.ts';

import {
  getComponentProperties,
  getDebugTooltipContent,
  getLabel,
  getTooltipContent,
} from './Cell.utils';

describe(`getLabel`, () => {
  const cases: TestCases<typeof getLabel> = [
    ['', [false, false, SHIP_ONE, 0]],
    [String(SHIP_ONE.size), [true, false, SHIP_ONE, 0]],
    [String(SHIP_ONE.size), [false, true, SHIP_ONE, 0]],
    [String(SHIP_ONE.size), [true, true, SHIP_ONE, 0]],
    ['0', [true, false, null, 0]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(getLabel(...input)).toEqual(expected);
  });
});

describe(`getTooltipContent`, () => {
  const cases: TestCases<typeof getTooltipContent> = [
    ['', [false, SHIP_ONE]],
    ['', [true, null]],
    [SHIP_ONE.name, [true, SHIP_ONE]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(getTooltipContent(...input)).toEqual(expected);
  });
});

describe(`getDebugTooltipContent`, () => {
  const cases: TestCases<typeof getDebugTooltipContent> = [
    [`${SHIP_ONE.name} #${SHIP_ONE.id}`, [SHIP_ONE]],
    [``, [null]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(getDebugTooltipContent(...input)).toEqual(expected);
  });
});

describe(`getComponentProperties`, () => {
  // @ts-expect-error skipping type checking for the test
  const state: GameState = {
    board: [
      [0, 1],
      [2, 0],
    ],
    attacksMap: {
      '10': true,
      '11': false,
    },
    shipsMap: generateShipsMaps([SHIP_SEVEN, SHIP_SEVEN]),
  };

  const stateWithDebug = {
    ...state,
    isDebug: true,
  };

  describe(`cases`, () => {
    const cases: TestCases<typeof getComponentProperties> = [
      [
        { id: 'cell-00', className: 'cell available', label: '', tooltipContent: '' },
        [state, 0, 0],
      ],
      [
        { id: 'cell-10', className: 'cell taken hit', label: '1', tooltipContent: 'seven' },
        [state, 0, 1],
      ],
      [
        { id: 'cell-01', className: 'cell taken available', label: '', tooltipContent: '' },
        [state, 1, 0],
      ],
      [{ id: 'cell-11', className: 'cell miss', label: '', tooltipContent: '' }, [state, 1, 1]],
      [
        {
          id: 'cell-01',
          className: 'cell taken available',
          label: '1',
          tooltipContent: 'seven #1',
        },
        [stateWithDebug, 1, 0],
      ],
      [
        { id: 'cell-10', className: 'cell taken hit', label: '1', tooltipContent: 'seven #2' },
        [stateWithDebug, 0, 1],
      ],
    ];
    test.each(cases)('case %#', (expected, input) => {
      expect(getComponentProperties(...input)).toEqual(expected);
    });
  });
});
