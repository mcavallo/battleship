import merge from 'lodash/merge';
import React, { Dispatch, useEffect } from 'react';

import { useGameState } from '@/hooks/useGameState';
import { GameAction, GameState } from '@/providers/StateContext/StateContext.types';

import { StateContext } from './StateContext';
import { DEFAULT_MOCKED_STATE, INTROSPECTION_ACTION } from './StateContext.mocks.constants';

export type PartialStateContextProviderValue = {
  state?: Partial<GameState>;
  dispatch?: Dispatch<GameAction>;
};

interface MockedStateContextProviderProps {
  children?: React.ReactNode;
  value?: PartialStateContextProviderValue;
}

export const MockedStateContextProvider = ({
  children,
  value: { state = {}, dispatch = () => {} } = {},
}: MockedStateContextProviderProps) => {
  const valueWithDefaults = {
    state: merge(structuredClone(DEFAULT_MOCKED_STATE), state),
    dispatch,
  };

  return <StateContext.Provider value={valueWithDefaults}>{children}</StateContext.Provider>;
};

export const IntrospectionComponent = () => {
  const { state, dispatch } = useGameState();

  useEffect(() => {
    dispatch(INTROSPECTION_ACTION);
  }, [state, dispatch]);

  return null;
};
