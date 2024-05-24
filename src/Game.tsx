import { useGameState } from '@/providers/StateContext';
import { GameIntroScreen } from '@/screens/GameIntroScreen';
import { GameScreen } from '@/screens/GameScreen';

export const Game = () => {
  const { state } = useGameState();

  if (!state.hasGameStarted) {
    return <GameIntroScreen />;
  }

  return <GameScreen />;
};
