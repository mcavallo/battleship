import { cleanup, render, screen } from '@testing-library/react';

import { App } from './App';
import { Game } from './Game';

jest.mock('./Game', () => ({
  Game: jest.fn(),
}));

afterEach(() => {
  cleanup();
});

describe(`App`, () => {
  it(`shows the error screen when an error happens within the boundary`, () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    (Game as jest.Mock).mockImplementation(() => {
      throw new Error('ERROR');
    });

    render(<App />);
    screen.getByTestId('error-screen');

    (console.error as jest.Mock).mockRestore();
  });
});
