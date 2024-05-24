import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Cell } from './Cell';
import { getComponentProperties } from './Cell.utils.ts';

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

const PROPERTIES = {
  id: 'CELL_ID',
  className: 'CELL_CLASS',
  label: 'CELL_LABEL',
  tooltipContent: 'CELL_TOOLTIP_CONTENT',
};

const onClick = jest.fn();
const onMouseOut = jest.fn();
const onMouseOver = jest.fn();

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe('Cell', () => {
  it(`renders the component and wires all the callbacks and properties`, () => {
    (getComponentProperties as jest.Mock).mockReturnValue(PROPERTIES);

    render(
      <Cell onClick={onClick} onMouseOut={onMouseOut} onMouseOver={onMouseOver} x={0} y={0} />,
    );

    const cell = screen.getByRole('cell');

    expect(cell.id).toEqual(PROPERTIES.id);
    expect(cell.className).toEqual(PROPERTIES.className);
    expect(cell.textContent).toEqual(PROPERTIES.label);

    fireEvent.mouseOver(cell);
    expect(onMouseOver).toHaveBeenCalledWith(PROPERTIES.id, PROPERTIES.tooltipContent);

    fireEvent.click(cell);
    expect(onClick).toHaveBeenCalled();

    fireEvent.mouseOut(cell);
    expect(onMouseOut).toHaveBeenCalled();
  });
});
