import { EndEvent, LogEntry } from '@/providers/StateContext/StateContext.types';
import { formatDecimal, pluralize } from '@/utils/format';

interface EndEntryProps {
  entry: LogEntry<EndEvent>;
}

export const EndEntry = ({ entry }: EndEntryProps) => {
  return (
    <div className="entry" role="log">
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
};
