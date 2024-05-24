import { render, renderHook } from '@testing-library/react';

import { StateContextProvider, useGameState } from './StateContext';
import { IntrospectionComponent, MockedStateContextProvider } from './StateContext.mocks';
import {
  DEFAULT_MOCKED_STATE,
  INTROSPECTION_ACTION,
  INTROSPECTION_STATE,
} from './StateContext.mocks.constants';
import { gameReducer, getInitialState } from './StateContext.state.ts';

jest.mock('./StateContext.state.ts', () => {
  const original = jest.requireActual('./StateContext.state.ts');
  return {
    __esModule: true,
    ...original,
    gameReducer: jest.fn().mockImplementation(original.gameReducer),
    getInitialState: jest.fn().mockImplementation(original.getInitialState),
  };
});

describe(`useGameState`, () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('throws when used outside of the StateContext', () => {
    expect(() => renderHook(() => useGameState())).toThrow();
  });

  it('returns the StateContext value', () => {
    const { result } = renderHook(() => useGameState(), {
      wrapper: ({ children }) => (
        <MockedStateContextProvider>{children}</MockedStateContextProvider>
      ),
    });
    expect(result.current.state).toEqual(DEFAULT_MOCKED_STATE);
  });
});

describe(`StateContextProvider`, () => {
  beforeEach(() => {
    (getInitialState as jest.Mock).mockReset();
    (gameReducer as jest.Mock).mockReset();
  });

  it(`provides the state value and dispatch function`, () => {
    (getInitialState as jest.Mock).mockReturnValue(INTROSPECTION_STATE);

    render(
      <StateContextProvider>
        <IntrospectionComponent />
      </StateContextProvider>,
    );

    expect(getInitialState).toHaveBeenCalled();
    expect((gameReducer as jest.Mock).mock.calls[0]).toEqual([
      INTROSPECTION_STATE,
      INTROSPECTION_ACTION,
    ]);
  });
});
