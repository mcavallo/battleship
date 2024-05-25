import { LogEntry, MissEvent } from '@/providers/StateContext/StateContext.types';

interface MissEntryProps {
  entry: LogEntry<MissEvent>;
}

export const MissEntry = ({ entry }: MissEntryProps) => {
  return (
    <div className="entry" key={`${entry.ts}${entry.event.type}`} role="log">
      <div className="content">
        <span>🌊</span>
        <span>Miss</span>
      </div>
    </div>
  );
};
