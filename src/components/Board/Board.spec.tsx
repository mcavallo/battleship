import { cleanup, render, screen, within } from '@testing-library/react';

import { Board } from '@/components/Board/Board';
import { BOARD_SIZE_5 } from '@/providers/StateContext/StateContext.fixtures';
import { withStateContextWrapper } from '@/utils/test';

const onAttack = jest.fn();
const onCellMouseOut = jest.fn();
const onCellMouseOver = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe('Board', () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(
        <Board
          onAttack={onAttack}
          onCellMouseOut={onCellMouseOut}
          onCellMouseOver={onCellMouseOver}
        />,
        withStateContextWrapper(),
      );

      screen.getByRole('grid');
    });

    describe(`className`, () => {
      it(`has the game-active class when the game is ongoing`, () => {
        render(
          <Board
            onAttack={onAttack}
            onCellMouseOut={onCellMouseOut}
            onCellMouseOver={onCellMouseOver}
          />,
          withStateContextWrapper(),
        );

        const container = screen.getByRole('grid');

        expect(Object.values(container.classList)).toEqual(['board', 'game-active']);
      });

      it(`has the game-ended when the game has ended`, () => {
        render(
          <Board
            onAttack={onAttack}
            onCellMouseOut={onCellMouseOut}
            onCellMouseOver={onCellMouseOver}
          />,
          withStateContextWrapper({
            state: {
              hasGameEnded: true,
            },
          }),
        );

        const container = screen.getByRole('grid');

        expect(Object.values(container.classList)).toEqual(['board', 'game-ended']);
      });
    });
  });

  describe(`children`, () => {
    it(`has the right children`, () => {
      render(
        <Board
          onAttack={onAttack}
          onCellMouseOut={onCellMouseOut}
          onCellMouseOver={onCellMouseOver}
        />,
        withStateContextWrapper({
          state: {
            board: BOARD_SIZE_5,
          },
        }),
      );

      const container = screen.getByRole('grid');

      within(container).getByRole('columnheader');

      const rows = within(container).getAllByRole('row');
      expect(rows.length).toEqual(5);
    });
  });
});
