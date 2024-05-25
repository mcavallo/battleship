import React, { createContext, useMemo, useReducer } from 'react';

import { gameReducer, getInitialState } from './StateContext.state';
import { GameAction, GameState } from './StateContext.types';

export interface StateContextValues {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

interface StateContextProviderProps {
  children: React.ReactNode;
}

export const StateContext = createContext<StateContextValues>({} as StateContextValues);

export const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, getInitialState());
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
