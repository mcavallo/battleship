import { useCallback } from 'react';

import { GameActionKind, useGameState } from '@/providers/StateContext';

export const GameIntroScreen = () => {
  const { dispatch } = useGameState();

  const handleStartClick = useCallback(() => {
    dispatch({
      type: GameActionKind.Start,
      payload: {
        ts: Date.now(),
      },
    });
  }, [dispatch]);

  return (
    <div className="intro-screen">
      <h1>Battleship</h1>
      <button onClick={handleStartClick}>Play</button>
    </div>
  );
};
