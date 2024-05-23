import { useMemo } from 'react';

interface HeaderRowProps {
  size: number;
}

export const NumberHeadersRow = ({ size }: HeaderRowProps) => {
  const headers = useMemo(
    () =>
      Array(size)
        .fill(0)
        .map((_, idx) => idx + 1),
    [size],
  );

  return (
    <div className="header-row">
      {headers.map((value, idx) => (
        <div className="header-cell" key={`headers-cell${idx}`}>
          {value}
        </div>
      ))}
    </div>
  );
};
