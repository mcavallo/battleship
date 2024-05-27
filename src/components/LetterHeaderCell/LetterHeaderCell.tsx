import { useMemo } from 'react';

interface LetterHeaderCellProps {
  idx: number;
}

export const LetterHeaderCell = ({ idx }: LetterHeaderCellProps) => {
  const label = useMemo(() => String.fromCharCode(idx + 1 + 64), [idx]);

  return (
    <div className="header-cell vertical" role="rowheader">
      {label}
    </div>
  );
};
