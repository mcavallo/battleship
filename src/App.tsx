import './App.css';

import { useGameState } from '@/providers/StateContext';
import { GameIntroScreen } from '@/screens/GameIntroScreen';
import { GameScreen } from '@/screens/GameScreen';

function App() {
  const { state } = useGameState();

  if (!state.hasGameStarted) {
    return <GameIntroScreen />;
  }

  return <GameScreen />;
}

export default App;
