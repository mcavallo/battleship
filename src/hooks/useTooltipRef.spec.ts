import { renderHook } from '@testing-library/react';
import { useRef } from 'react';

import { useTooltipRef } from './useTooltipRef';

jest.mock('react', () => {
  const original = jest.requireActual('react');
  return {
    __esModule: true,
    ...original,
    useRef: jest.fn(),
  };
});

const open = jest.fn();
const close = jest.fn();

describe(`useTooltipRef`, () => {
  it(`creates a ref and returns functions to control the open and close state`, () => {
    (useRef as jest.Mock).mockReturnValue({
      current: { __isMocked: true, open, close },
    });

    const { result } = renderHook(() => useTooltipRef());

    // @ts-expect-error only for this test
    expect(result.current.tooltipRef.current.__isMocked).toEqual(true);

    result.current.openTooltip('foo', 'bar');
    expect(open).toHaveBeenCalledWith({ anchorSelect: '#foo', content: 'bar' });

    result.current.closeTooltip();
    expect(close).toHaveBeenCalled();
  });
});
