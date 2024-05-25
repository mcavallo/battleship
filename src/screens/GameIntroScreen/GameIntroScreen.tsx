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
    <div className="intro-screen" data-testid="intro-screen" role="main">
      <h1>Battleship</h1>
      <button aria-label="play" onClick={handleStartClick} role="button">
        Play
      </button>
    </div>
  );
};
