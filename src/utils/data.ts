import cloneDeep from 'lodash/cloneDeep';

import { Board } from '@/providers/StateContext/StateContext.types';

/**
 * Fills a row with sequential numbers.
 */
export function fillRow(board: Board, y: number) {
  const clone = cloneDeep(board);
  clone[y] = clone[y].map((_, idx) => idx + 1);
  return clone;
}

/**
 * Fills a column with sequential numbers.
 */
export function fillCol(board: Board, x: number) {
  const clone = cloneDeep(board);

  for (let i = 0; i < clone.length; i++) {
    clone[i][x] = i + 1;
  }

  return clone;
}

/**
 * Fills a column with sequential numbers.
 */
export function setCell(board: Board, x: number, y: number, value: number) {
  const clone = cloneDeep(board);
  clone[y][x] = value;
  return clone;
}
