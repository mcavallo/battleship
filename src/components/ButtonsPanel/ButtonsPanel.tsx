import { useGameState } from '@/providers/StateContext';

interface ButtonsPanelProps {
  onGiveUp: () => void;
  onRestart: () => void;
  onToggleDebug: () => void;
}

export const ButtonsPanel = ({ onGiveUp, onRestart, onToggleDebug }: ButtonsPanelProps) => {
  const { state } = useGameState();

  return (
    <div className="buttons-panel" role="menubar">
      <div className="wrapper">
        <button aria-label="give up" onClick={onGiveUp} disabled={state.hasGameEnded} role="button">
          Give up
        </button>
        <button aria-label="restart" onClick={onRestart} role="button">
          Restart
        </button>
        <button aria-label="toggle debug" onClick={onToggleDebug} role="button">
          Debug
        </button>
      </div>
    </div>
  );
};
