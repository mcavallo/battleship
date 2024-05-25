import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { BOARD_SIZE_5 } from '@/providers/StateContext/StateContext.fixtures';
import { withStateContextWrapper } from '@/utils/test';

import { Cell } from './Cell';

const onClick = jest.fn();
const onMouseOut = jest.fn();
const onMouseOver = jest.fn();

beforeEach(() => {
  render(
    <Cell onClick={onClick} onMouseOut={onMouseOut} onMouseOver={onMouseOver} x={0} y={0} />,
    withStateContextWrapper({
      state: {
        board: BOARD_SIZE_5,
      },
    }),
  );
});

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe('Cell', () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      const cell = screen.getByRole('cell');

      expect(cell.id).toEqual('cell-00');
      expect(Object.values(cell.classList)).toEqual(['cell', 'available']);
      expect(cell.textContent).toEqual('');
    });
  });

  describe(`event handlers`, () => {
    it(`has the right event handlers`, () => {
      const cell = screen.getByRole('cell');

      fireEvent.mouseOver(cell);
      expect(onMouseOver).toHaveBeenCalledWith('cell-00', '');

      fireEvent.mouseOut(cell);
      expect(onMouseOut).toHaveBeenCalled();

      fireEvent.click(cell);
      expect(onClick).toHaveBeenCalled();
    });
  });
});
