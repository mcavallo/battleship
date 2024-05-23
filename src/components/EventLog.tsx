import { useMemo } from 'react';

import { useGameState } from '@/providers/StateContext';
import { EventKind } from '@/providers/StateContext/StateContext.types.ts';
import { formatDecimal, pluralize } from '@/utils/format';

export const EventLog = () => {
  const { state } = useGameState();

  const entries = useMemo(() => {
    return state.log.slice().reverse();
  }, [state.log]);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="event-log">
      {entries.map((entry) => {
        switch (entry.event.type) {
          case EventKind.End:
            return (
              <div className="entry" key={`${entry.ts}${entry.event.type}`}>
                <div className="content">
                  <span>🏅</span>
                  <span>
                    <strong>The game is over!</strong> This is how you did:
                  </span>
                </div>
                <ul className="stats">
                  <li>
                    Your score is <strong>{entry.event.stats.score}</strong>
                  </li>
                  <li>
                    You sunk <strong>{entry.event.stats.sunk}</strong>{' '}
                    {pluralize(entry.event.stats.sunk, 'ship')}
                  </li>
                  <li>
                    You fired <strong>{entry.event.stats.attacks}</strong>{' '}
                    {pluralize(entry.event.stats.attacks, 'time')}
                  </li>
                  <li>
                    Your hit ratio is <strong>{formatDecimal(entry.event.stats.hitRatio)}%</strong>
                  </li>
                </ul>
              </div>
            );
          case EventKind.Miss:
            return (
              <div className="entry" key={`${entry.ts}${entry.event.type}`}>
                <div className="content">
                  <span>🌊</span>
                  <span>Miss</span>
                </div>
              </div>
            );
          case EventKind.Hit:
            return (
              <div className="entry" key={`${entry.ts}${entry.event.type}`}>
                <div className="content">
                  <span>💥</span>
                  <span>
                    <strong>You hit a {state.shipsMap[entry.event.targetId].name}</strong>!
                  </span>
                </div>
              </div>
            );
          case EventKind.Sink:
            return (
              <div className="entry" key={`${entry.ts}${entry.event.type}`}>
                <div className="content">
                  <span>🚢</span>
                  <span>
                    <strong>A {state.shipsMap[entry.event.targetId].name} sank!</strong>
                  </span>
                </div>
              </div>
            );
          case EventKind.Start:
            return (
              <div className="entry" key={`${entry.ts}${entry.event.type}`}>
                <div className="content">
                  <span>🏁</span>
                  <span>
                    <strong>Game started.</strong>
                  </span>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};
