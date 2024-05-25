import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';

import { withStateContextWrapper } from '@/utils/test';

import { ButtonsPanel } from './ButtonsPanel';

const onGiveUp = jest.fn();
const onRestart = jest.fn();
const onToggleDebug = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe('ButtonsPanel', () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(
        <ButtonsPanel onGiveUp={onGiveUp} onRestart={onRestart} onToggleDebug={onToggleDebug} />,
        withStateContextWrapper({
          state: {
            hasGameEnded: false,
          },
        }),
      );

      const container = screen.getByRole('menubar');

      expect(Object.values(container.classList)).toEqual(['buttons-panel']);
    });
  });

  describe(`event handlers`, () => {
    it(`has the right event handlers`, () => {
      render(
        <ButtonsPanel onGiveUp={onGiveUp} onRestart={onRestart} onToggleDebug={onToggleDebug} />,
        withStateContextWrapper({
          state: {
            hasGameEnded: false,
          },
        }),
      );

      const container = screen.getByRole('menubar');

      const debugButton = within(container).getByRole('button', { name: 'toggle debug' });

      fireEvent.click(debugButton);
      expect(onToggleDebug).toHaveBeenCalled();

      const restartButton = within(container).getByRole('button', { name: 'restart' });

      fireEvent.click(restartButton);
      expect(onRestart).toHaveBeenCalled();

      const giveUpButton = within(container).getByRole('button', { name: 'give up' });

      fireEvent.click(giveUpButton);
      expect(onGiveUp).toHaveBeenCalled();
    });

    describe(`give up button`, () => {
      it(`is disabled when the game has ended`, () => {
        render(
          <ButtonsPanel onGiveUp={onGiveUp} onRestart={onRestart} onToggleDebug={onToggleDebug} />,
          withStateContextWrapper({
            state: {
              hasGameEnded: true,
            },
          }),
        );

        const container = screen.getByRole('menubar');

        const giveUpButton = within(container).getByRole('button', { name: 'give up' });

        expect(giveUpButton).toBeDisabled();
      });
    });
  });
});
