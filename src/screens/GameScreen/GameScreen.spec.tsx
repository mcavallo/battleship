import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import MockDate from 'mockdate';

import { useTooltipRef } from '@/hooks/useTooltipRef';
import {
  BOARD_SIZE_5,
  SHIP_ONE,
  START_LOG_ENTRY,
} from '@/providers/StateContext/StateContext.fixtures';
import { setCell } from '@/utils/data';
import { withStateContextWrapper } from '@/utils/test';

import { GameScreen } from './GameScreen';

jest.mock('@/hooks/useTooltipRef', () => ({
  useTooltipRef: jest.fn().mockReturnValue({}),
}));

const NOW = '2024-05-24T00:00:00.000Z';
const NOW_TS = 1716508800000;

const dispatch = jest.fn();
const openTooltip = jest.fn();
const closeTooltip = jest.fn();

afterEach(() => {
  cleanup();
});

afterAll(() => {
  MockDate.reset();
});

beforeEach(() => {
  dispatch.mockReset();
  MockDate.set(NOW);
});

describe(`GameScreen`, () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(<GameScreen />, withStateContextWrapper());

      const container = screen.getByRole('main');

      expect(Object.values(container.classList)).toEqual(['game-screen']);
      expect(container.getAttribute('data-testid')).toEqual('game-screen');
    });
  });

  describe(`children`, () => {
    describe(`buttons`, () => {
      it(`renders the buttons panel`, () => {
        render(<GameScreen />, withStateContextWrapper());

        screen.getByRole('menubar');
      });

      it(`renders the debug button and binds the right callback`, () => {
        render(<GameScreen />, withStateContextWrapper({ dispatch }));

        const buttonPanel = screen.getByRole('menubar');
        const debugButton = within(buttonPanel).getByRole('button', { name: 'toggle debug' });

        fireEvent.click(debugButton);
        expect(dispatch).toHaveBeenCalledWith({
          type: 'ToggleDebug',
        });
      });

      it(`renders the restart button and binds the right callback`, () => {
        render(<GameScreen />, withStateContextWrapper({ dispatch }));

        const buttonPanel = screen.getByRole('menubar');
        const restartButton = within(buttonPanel).getByRole('button', { name: 'restart' });

        fireEvent.click(restartButton);
        expect(dispatch).toHaveBeenCalledWith({ payload: { ts: NOW_TS }, type: 'Start' });
      });

      it(`renders the give up button and binds the right callback`, () => {
        render(<GameScreen />, withStateContextWrapper({ dispatch }));

        const buttonPanel = screen.getByRole('menubar');
        const giveUpButton = within(buttonPanel).getByRole('button', { name: 'give up' });

        fireEvent.click(giveUpButton);
        expect(dispatch).toHaveBeenCalledWith({ payload: { ts: NOW_TS }, type: 'End' });
      });

      it(`disables the give up button once the game has ended`, () => {
        render(
          <GameScreen />,
          withStateContextWrapper({
            dispatch,
            state: {
              hasGameEnded: true,
            },
          }),
        );

        const buttonPanel = screen.getByRole('menubar');
        const giveUpButton = within(buttonPanel).getByRole('button', { name: 'give up' });

        fireEvent.click(giveUpButton);
        expect(dispatch).not.toHaveBeenCalled();
      });
    });

    describe(`board`, () => {
      it(`renders the board`, () => {
        render(
          <GameScreen />,
          withStateContextWrapper({
            dispatch,
            state: {
              board: BOARD_SIZE_5,
            },
          }),
        );

        screen.getByRole('grid');
      });

      describe(`attack action`, () => {
        it(`is sent when a cell is clicked`, () => {
          render(
            <GameScreen />,
            withStateContextWrapper({
              dispatch,
              state: {
                board: BOARD_SIZE_5,
              },
            }),
          );

          const board = screen.getByRole('grid');
          const rows = within(board).getAllByRole('row');
          const cells = within(rows[0]).getAllByRole('cell');

          fireEvent.click(cells[0]);
          expect(dispatch).toHaveBeenCalledWith({
            payload: {
              coords: {
                x: 0,
                y: 0,
              },
              ts: NOW_TS,
            },
            type: 'Attack',
          });
        });

        it(`is not sent when the game has ended`, () => {
          render(
            <GameScreen />,
            withStateContextWrapper({
              dispatch,
              state: {
                board: BOARD_SIZE_5,
                hasGameEnded: true,
              },
            }),
          );

          const board = screen.getByRole('grid');
          const rows = within(board).getAllByRole('row');
          const cells = within(rows[0]).getAllByRole('cell');

          fireEvent.click(cells[0]);
          expect(dispatch).not.toHaveBeenCalled();
        });
      });

      describe(`tooltip`, () => {
        beforeEach(() => {
          (useTooltipRef as jest.Mock).mockReturnValue({
            tooltipRef: null,
            openTooltip,
            closeTooltip,
          });
        });

        it(`displays the tooltip when a cell with a hit is hovered over`, () => {
          render(
            <GameScreen />,
            withStateContextWrapper({
              state: {
                attacksMap: {
                  '00': true,
                },
                board: setCell(BOARD_SIZE_5, 0, 0, 1),
                shipsMap: {
                  1: SHIP_ONE,
                },
              },
            }),
          );

          const board = screen.getByRole('grid');
          const rows = within(board).getAllByRole('row');
          const cells = within(rows[0]).getAllByRole('cell');

          fireEvent.mouseOver(cells[0]);
          expect(openTooltip).toHaveBeenCalledWith('cell-00', SHIP_ONE.name);
        });

        it(`displays the tooltip when a cell with ship is hovered over in debug mode`, () => {
          render(
            <GameScreen />,
            withStateContextWrapper({
              state: {
                isDebug: true,
                board: setCell(BOARD_SIZE_5, 0, 0, 1),
                shipsMap: {
                  1: SHIP_ONE,
                },
              },
            }),
          );

          const board = screen.getByRole('grid');
          const rows = within(board).getAllByRole('row');
          const cells = within(rows[0]).getAllByRole('cell');

          fireEvent.mouseOver(cells[0]);
          expect(openTooltip).toHaveBeenCalledWith('cell-00', `${SHIP_ONE.name} #${SHIP_ONE.id}`);
        });

        it(`hides the tooltip when a cell is hovered out`, () => {
          render(
            <GameScreen />,
            withStateContextWrapper({
              state: {
                attacksMap: {
                  '00': true,
                },
                board: setCell(BOARD_SIZE_5, 0, 0, 1),
                shipsMap: {
                  1: SHIP_ONE,
                },
              },
            }),
          );

          const board = screen.getByRole('grid');
          const rows = within(board).getAllByRole('row');
          const cells = within(rows[0]).getAllByRole('cell');

          fireEvent.mouseOut(cells[0]);
          expect(closeTooltip).toHaveBeenCalled();
        });
      });
    });

    describe(`event log`, () => {
      it(`renders the event log`, () => {
        render(
          <GameScreen />,
          withStateContextWrapper({
            state: {
              log: [START_LOG_ENTRY],
            },
          }),
        );

        screen.getByRole('feed');
      });
    });
  });
});
