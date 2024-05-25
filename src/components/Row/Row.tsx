import { Cell } from '../Cell';
import { LetterHeaderCell } from '../LetterHeaderCell';

interface RowProps {
  onAttack: (x: number, y: number) => () => void;
  onCellMouseOut: () => void;
  onCellMouseOver: (id: string, content: string) => () => void;
  row: number[];
  rowIdx: number;
}

export const Row = ({ onAttack, onCellMouseOut, onCellMouseOver, row, rowIdx }: RowProps) => {
  return (
    <div className="row" role="row">
      <LetterHeaderCell idx={rowIdx} key={`headerCell${rowIdx}`} />
      {row.map((_, cellIdx) => (
        <Cell
          key={`cell${rowIdx}${cellIdx}`}
          onClick={onAttack(cellIdx, rowIdx)}
          onMouseOut={onCellMouseOut}
          onMouseOver={onCellMouseOver}
          x={cellIdx}
          y={rowIdx}
        />
      ))}
    </div>
  );
};
