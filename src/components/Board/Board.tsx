import classNames from 'classnames';
import { useMemo } from 'react';

import { NumberHeadersRow } from '@/components/NumberHeadersRow';
import { Row } from '@/components/Row';
import { useGameState } from '@/providers/StateContext';

interface BoardProps {
  onAttack: (x: number, y: number) => () => void;
  onCellMouseOut: () => void;
  onCellMouseOver: (id: string, content: string) => () => void;
}

export const Board = ({ onAttack, onCellMouseOut, onCellMouseOver }: BoardProps) => {
  const { state } = useGameState();

  const { board, className } = useMemo(
    () => ({
      board: state.board,
      className: classNames({
        board: true,
        'game-ended': state.hasGameEnded,
        'game-active': !state.hasGameEnded,
      }),
    }),
    [state],
  );

  return (
    <div className={className} role="grid">
      <NumberHeadersRow size={board.length} />
      {board.map((row, rowIdx) => (
        <Row
          key={`row${rowIdx}`}
          onAttack={onAttack}
          onCellMouseOut={onCellMouseOut}
          onCellMouseOver={onCellMouseOver}
          row={row}
          rowIdx={rowIdx}
        />
      ))}
    </div>
  );
};
