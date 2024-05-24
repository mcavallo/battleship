import React, { createContext, useContext, useMemo, useReducer } from 'react';

import { gameReducer, getInitialState } from './StateContext.state.ts';
import { GameAction, GameState } from './StateContext.types.ts';

export interface StateContextValues {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

interface StateContextProviderProps {
  children: React.ReactNode;
}

export const StateContext = createContext<StateContextValues>({} as StateContextValues);

// eslint-disable-next-line react-refresh/only-export-components
export const useGameState = () => {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error(`'useGameState' should only be used inside 'StateContext'.`);
  }

  return value;
};

export const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, getInitialState());
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
