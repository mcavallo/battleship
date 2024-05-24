import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';

import { Row } from './Row';

jest.mock('@/providers/StateContext', () => {
  return {
    useGameState: jest.fn().mockReturnValue({}),
  };
});

jest.mock('./Cell.utils.ts', () => {
  return {
    getComponentProperties: jest.fn().mockReturnValue({}),
  };
});

const onAttack = jest.fn();
const onCellMouseOut = jest.fn();
const onCellMouseOver = jest.fn();

const boardRow = Array(5).fill(0);

afterEach(() => {
  cleanup();
});

describe('Row', () => {
  it(`renders the component and wires all the callbacks and properties`, () => {
    render(
      <Row
        onAttack={onAttack}
        onCellMouseOut={onCellMouseOut}
        onCellMouseOver={onCellMouseOver}
        row={boardRow}
        rowIdx={0}
      />,
    );

    const row = screen.getByRole('row');

    const header = within(row).getByRole('rowheader');
    expect(header.textContent).toEqual('A');

    const cells = within(row).getAllByRole('cell');
    expect(cells.length).toEqual(boardRow.length);

    fireEvent.mouseOver(cells[0]);
    expect(onCellMouseOver).toHaveBeenCalled();

    fireEvent.click(cells[0]);
    expect(onAttack).toHaveBeenCalledWith(0, 0);

    fireEvent.mouseOut(cells[0]);
    expect(onCellMouseOut).toHaveBeenCalled();
  });
});
