import { LogEntry, ShipsMap, SinkEvent } from '@/providers/StateContext/StateContext.types';

interface SinkEntryProps {
  entry: LogEntry<SinkEvent>;
  shipsMap: ShipsMap;
}

export const SinkEntry = ({ entry, shipsMap }: SinkEntryProps) => {
  return (
    <div className="entry" role="log">
      <div className="content">
        <span>🚢</span>
        <span>
          <strong>A {shipsMap[entry.event.targetId].name} sank!</strong>
        </span>
      </div>
    </div>
  );
};
