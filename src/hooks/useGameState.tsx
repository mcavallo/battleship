import { useContext } from 'react';

import { StateContext } from '@/providers/StateContext/StateContext';

export const useGameState = () => {
  const value = useContext(StateContext);

  if (!value || Object.keys(value).length === 0) {
    throw new Error(`'useGameState' should only be used inside 'StateContext'.`);
  }

  return value;
};
