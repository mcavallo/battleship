import { useCallback } from 'react';

import { GameActionKind, useGameState } from '@/providers/StateContext';

export const GameEndedScreen = () => {
  const { dispatch } = useGameState();

  const handleRestartClick = useCallback(() => {
    dispatch({
      type: GameActionKind.Start,
      payload: {
        ts: Date.now(),
      },
    });
  }, [dispatch]);

  return (
    <>
      <h1>Game is over!</h1>
      <button onClick={handleRestartClick}>Play again</button>
    </>
  );
};
