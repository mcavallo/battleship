import classNames from 'classnames';
import { useCallback, useRef } from 'react';
import { Tooltip, TooltipRefProps } from 'react-tooltip';

import { EventLog } from '@/components/EventLog';
import { NumberHeadersRow } from '@/components/NumberHeadersRow';
import { Row } from '@/components/Row.tsx';
import { BOARD_SIZE } from '@/constants.ts';
import { GameActionKind, useGameState } from '@/providers/StateContext';

export const GameScreen = () => {
  const { dispatch, state } = useGameState();
  const tooltipRef = useRef<TooltipRefProps>(null);

  const handleGiveUpClick = useCallback(() => {
    dispatch({
      type: GameActionKind.End,
      payload: {
        ts: Date.now(),
      },
    });
  }, [dispatch]);

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
        tooltipRef.current?.open({
          anchorSelect: `#${id}`,
          content,
        });
      }
    },
    [],
  );

  const handleCellMouseOut = useCallback(() => {
    tooltipRef.current?.close();
  }, []);

  const boardClass = classNames({
    board: true,
    'game-ended': state.hasGameEnded,
    'game-active': !state.hasGameEnded,
  });

  return (
    <div className="game-screen" data-testid="game-screen">
      <div className="buttons-panel">
        <button onClick={handleGiveUpClick} disabled={state.hasGameEnded}>
          Give up
        </button>
        <button onClick={handleRestartClick}>Restart</button>
        <button onClick={handleDebugClick}>Debug</button>
      </div>
      <div className="columns">
        <div className={boardClass}>
          <NumberHeadersRow size={BOARD_SIZE} />
          {state.board.map((row, rowIdx) => (
            <Row
              key={`row${rowIdx}`}
              onAttack={handleAttackClick}
              onCellMouseOut={handleCellMouseOut}
              onCellMouseOver={handleCellMouseOver}
              row={row}
              rowIdx={rowIdx}
            />
          ))}
          <Tooltip ref={tooltipRef} imperativeModeOnly />
        </div>
        <EventLog />
      </div>
    </div>
  );
};
