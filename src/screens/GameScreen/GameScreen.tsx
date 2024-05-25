import { useCallback } from 'react';
import { Tooltip } from 'react-tooltip';

import { Board } from '@/components/Board';
import { ButtonsPanel } from '@/components/ButtonsPanel';
import { EventLog } from '@/components/EventLog';
import { useTooltipRef } from '@/hooks/useTooltipRef';
import { GameActionKind, useGameState } from '@/providers/StateContext';

export const GameScreen = () => {
  const { dispatch, state } = useGameState();
  const { tooltipRef, openTooltip, closeTooltip } = useTooltipRef();

  const handleGiveUpClick = useCallback(() => {
    if (state.hasGameEnded) {
      return;
    }

    dispatch({
      type: GameActionKind.End,
      payload: {
        ts: Date.now(),
      },
    });
  }, [dispatch, state.hasGameEnded]);

  const handleRestartClick = useCallback(() => {
    dispatch({
      type: GameActionKind.Start,
      payload: {
        ts: Date.now(),
      },
    });
  }, [dispatch]);

  const handleAttackClick = useCallback(
    (x: number, y: number) => () => {
      if (state.hasGameEnded) {
        return;
      }

      dispatch({
        type: GameActionKind.Attack,
        payload: {
          coords: {
            x,
            y,
          },
          ts: Date.now(),
        },
      });
    },
    [dispatch, state.hasGameEnded],
  );

  const handleDebugClick = useCallback(() => {
    dispatch({
      type: GameActionKind.ToggleDebug,
    });
  }, [dispatch]);

  const handleCellMouseOver = useCallback(
    (id: string, content: string) => () => {
      if (id && content) {
        openTooltip(id, content);
      }
    },
    [openTooltip],
  );

  const handleCellMouseOut = useCallback(() => {
    closeTooltip();
  }, [closeTooltip]);

  return (
    <div className="game-screen" data-testid="game-screen" role="main">
      <ButtonsPanel
        onGiveUp={handleGiveUpClick}
        onRestart={handleRestartClick}
        onToggleDebug={handleDebugClick}
      />
      <div className="columns">
        <Board
          onAttack={handleAttackClick}
          onCellMouseOut={handleCellMouseOut}
          onCellMouseOver={handleCellMouseOver}
        />
        <EventLog />
      </div>
      <Tooltip ref={tooltipRef} imperativeModeOnly />
    </div>
  );
};
