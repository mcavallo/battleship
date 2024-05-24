import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import MockDate from 'mockdate';
import React from 'react';

import {
  MockedStateContextProvider,
  PartialStateContextProviderValue,
} from '@/providers/StateContext/StateContext.mocks.tsx';

import { GameIntroScreen } from './GameIntroScreen';

const NOW = '2024-05-24T00:00:00.000Z';
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

const withWrapper = (
  value?: PartialStateContextProviderValue,
): {
  wrapper: React.FC;
} => {
  return {
    wrapper: ({ children }: { children?: React.ReactNode }) => (
      <MockedStateContextProvider value={value}>{children}</MockedStateContextProvider>
    ),
  };
};

describe('GameIntroScreen', () => {
  describe(`when clicking the play button`, () => {
    it(`starts the game`, async () => {
      render(
        <GameIntroScreen />,
        withWrapper({
          dispatch,
        }),
      );

      const playButton = screen.getByRole('button', { name: 'play' });
      fireEvent.click(playButton);

      expect(dispatch).toHaveBeenCalledWith({ payload: { ts: 1716508800000 }, type: 'Start' });
    });
  });
});
