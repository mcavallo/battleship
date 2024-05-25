import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import MockDate from 'mockdate';

import { withStateContextWrapper } from '@/utils/test';

import { GameIntroScreen } from './GameIntroScreen';

const NOW = '2024-05-24T00:00:00.000Z';
const NOW_TS = 1716508800000;

const dispatch = jest.fn();

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

describe('GameIntroScreen', () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(<GameIntroScreen />, withStateContextWrapper());

      const container = screen.getByRole('main');

      expect(Object.values(container.classList)).toEqual(['intro-screen']);
      expect(container.getAttribute('data-testid')).toEqual('intro-screen');
    });
  });

  describe(`children`, () => {
    describe(`buttons`, () => {
      it(`it starts the game when clicking the play button`, () => {
        render(
          <GameIntroScreen />,
          withStateContextWrapper({
            dispatch,
          }),
        );

        const playButton = screen.getByRole('button', { name: 'play' });
        fireEvent.click(playButton);

        expect(dispatch).toHaveBeenCalledWith({ payload: { ts: NOW_TS }, type: 'Start' });
      });
    });
  });
});
