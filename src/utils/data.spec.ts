/** @jest-environment node */

import { BOARD_SIZE_5 } from '@/providers/StateContext/StateContext.fixtures';

import { fillCol, fillRow, setCell } from './data';

describe(`fillCol`, () => {
  it(`clones and board and fills a column with numbers sequentially starting at 1`, () => {
    const result = fillCol(BOARD_SIZE_5, 0);

    expect(result).toEqual([
      [1, 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
      [4, 0, 0, 0, 0],
      [5, 0, 0, 0, 0],
    ]);
  });
});

describe(`fillRow`, () => {
  it(`clones and board and fills a row with numbers sequentially starting at 1`, () => {
    const result = fillRow(BOARD_SIZE_5, 0);

    expect(result).toEqual([
      [1, 2, 3, 4, 5],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});

describe(`setCell`, () => {
  it(`clones and board and sets the value at the specified coordinates`, () => {
    const result = setCell(BOARD_SIZE_5, 1, 1, 3);

    expect(result).toEqual([
      [0, 0, 0, 0, 0],
      [0, 3, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});
