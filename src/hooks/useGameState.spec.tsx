import { renderHook } from '@testing-library/react';

import { useGameState } from '@/hooks/useGameState';
import { MockedStateContextProvider } from '@/providers/StateContext/StateContext.mocks';
import { DEFAULT_MOCKED_STATE } from '@/providers/StateContext/StateContext.mocks.constants';

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
