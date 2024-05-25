import { render } from '@testing-library/react';

import { StateContextProvider } from './StateContext';
import { IntrospectionComponent } from './StateContext.mocks';
import { INTROSPECTION_ACTION, INTROSPECTION_STATE } from './StateContext.mocks.constants';
import { gameReducer, getInitialState } from './StateContext.state';

jest.mock('./StateContext.state', () => {
  const original = jest.requireActual('./StateContext.state');
  return {
    __esModule: true,
    ...original,
    gameReducer: jest.fn().mockImplementation(original.gameReducer),
    getInitialState: jest.fn().mockImplementation(original.getInitialState),
  };
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
