import merge from 'lodash/merge';
import React, { Dispatch } from 'react';

import { GameAction, GameState } from '@/providers/StateContext/StateContext.types.ts';

import { StateContext } from './StateContext';

export type PartialStateContextProviderValue = {
  state?: Partial<GameState>;
  dispatch?: Dispatch<GameAction>;
};

interface MockedStateContextProviderProps {
  children?: React.ReactNode;
  value?: PartialStateContextProviderValue;
}

const defaultState = {
  attacksMap: {},
  board: [],
  hasGameEnded: false,
  hasGameStarted: false,
  isDebug: false,
  log: [],
  shipsMap: {},
  score: {
    current: 0,
    win: 0,
  },
};

export const MockedStateContextProvider = ({
  children,
  value,
}: MockedStateContextProviderProps) => {
  const valueWithDefaults = {
    state: merge(Object.assign({}, defaultState), value?.state || {}),
    dispatch: value?.dispatch || (() => {}),
  };

  return <StateContext.Provider value={valueWithDefaults}>{children}</StateContext.Provider>;
};
