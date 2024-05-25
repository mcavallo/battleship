import { useMemo } from 'react';

import { useGameState } from '@/providers/StateContext';
import {
  EndEvent,
  EventKind,
  HitEvent,
  LogEntry,
  MissEvent,
  SinkEvent,
} from '@/providers/StateContext/StateContext.types';

import { EndEntry } from './entries/EndEntry';
import { HitEntry } from './entries/HitEntry';
import { MissEntry } from './entries/MissEntry';
import { SinkEntry } from './entries/SinkEntry';
import { StartEntry } from './entries/StartEntry';

export const EventLog = () => {
  const { state } = useGameState();

  const entries = useMemo(() => {
    return state.log.slice().reverse();
  }, [state.log]);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="event-log" role="feed">
      {entries.map((entry) => {
        switch (entry.event.type) {
          case EventKind.End:
            return (
              <EndEntry
                key={`${entry.ts}${entry.event.type}`}
                entry={entry as LogEntry<EndEvent>}
              />
            );
          case EventKind.Hit:
            return (
              <HitEntry
                entry={entry as LogEntry<HitEvent>}
                key={`${entry.ts}${entry.event.type}`}
                shipsMap={state.shipsMap}
              />
            );
          case EventKind.Miss:
            return (
              <MissEntry
                entry={entry as LogEntry<MissEvent>}
                key={`${entry.ts}${entry.event.type}`}
              />
            );
          case EventKind.Sink:
            return (
              <SinkEntry
                entry={entry as LogEntry<SinkEvent>}
                key={`${entry.ts}${entry.event.type}`}
                shipsMap={state.shipsMap}
              />
            );
          case EventKind.Start:
            return <StartEntry key={`${entry.ts}${entry.event.type}`} />;
        }
      })}
    </div>
  );
};
