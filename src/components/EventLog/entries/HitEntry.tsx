import { HitEvent, LogEntry, ShipsMap } from '@/providers/StateContext/StateContext.types';

interface HitEntryProps {
  entry: LogEntry<HitEvent>;
  shipsMap: ShipsMap;
}

export const HitEntry = ({ entry, shipsMap }: HitEntryProps) => {
  return (
    <div className="entry" role="log">
      <div className="content">
        <span>💥</span>
        <span>
          <strong>You hit a {shipsMap[entry.event.targetId].name}</strong>!
        </span>
      </div>
    </div>
  );
};
