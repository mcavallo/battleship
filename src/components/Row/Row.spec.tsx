import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';

import { BOARD_SIZE_5 } from '@/providers/StateContext/StateContext.fixtures';
import { withStateContextWrapper } from '@/utils/test';

import { Row } from './Row';

const onAttack = jest.fn();
const onCellMouseOut = jest.fn();
const onCellMouseOver = jest.fn();

beforeEach(() => {
  render(
    <Row
      onAttack={onAttack}
      onCellMouseOut={onCellMouseOut}
      onCellMouseOver={onCellMouseOver}
      row={BOARD_SIZE_5[0]}
      rowIdx={0}
    />,
    withStateContextWrapper({
      state: {
        board: BOARD_SIZE_5,
      },
    }),
  );
});

afterEach(() => {
  cleanup();
});

describe('Row', () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      const container = screen.getByRole('row');

      expect(Object.values(container.classList)).toEqual(['row']);
    });
  });

  describe(`children`, () => {
    it(`has the right children`, () => {
      const row = screen.getByRole('row');

      within(row).getByRole('rowheader');

      const cells = within(row).getAllByRole('cell');
      expect(cells.length).toEqual(BOARD_SIZE_5.length);
    });
  });

  describe(`event handlers`, () => {
    it(`has the right event handlers`, () => {
      const row = screen.getByRole('row');

      const cells = within(row).getAllByRole('cell');

      fireEvent.mouseOver(cells[0]);
      expect(onCellMouseOver).toHaveBeenCalled();

      fireEvent.click(cells[0]);
      expect(onAttack).toHaveBeenCalledWith(0, 0);

      fireEvent.mouseOut(cells[0]);
      expect(onCellMouseOut).toHaveBeenCalled();
    });
  });
});
