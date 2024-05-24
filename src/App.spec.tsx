import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import {
  MockedStateContextProvider,
  PartialStateContextProviderValue,
} from '@/providers/StateContext/StateContext.mocks';

import App from './App';

afterEach(cleanup);

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

describe('App', () => {
  describe(`when the game has not yet started`, () => {
    it(`renders the intro screen`, async () => {
      render(
        <App />,
        withWrapper({
          state: {
            hasGameStarted: false,
          },
        }),
      );

      expect(screen.getByTestId('intro-screen')).toBeInTheDocument();
    });
  });

  describe(`when the game has started`, () => {
    it(`renders the game screen`, async () => {
      render(
        <App />,
        withWrapper({
          state: {
            hasGameStarted: true,
            board: [],
          },
        }),
      );

      expect(screen.getByTestId('game-screen')).toBeInTheDocument();
    });
  });
});
