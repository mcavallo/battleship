import './App.css';

import { useGameState } from '@/providers/StateContext';
// import { GameEndedScreen } from '@/screens/GameEndedScreen';
import { GameIntroScreen } from '@/screens/GameIntroScreen';
import { GameScreen } from '@/screens/GameScreen';

function App() {
  const { state } = useGameState();

  if (!state.hasGameStarted) {
    return <GameIntroScreen />;
  }

  // if (state.hasGameEnded) {
  //   return <GameEndedScreen />;
  // }

  return <GameScreen />;
}

export default App;
