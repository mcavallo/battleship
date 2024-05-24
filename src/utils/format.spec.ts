/** @jest-environment node */

import { formatDecimal, pluralize } from './format';

describe('formatDecimal', () => {
  const cases: TestCases<typeof formatDecimal> = [
    ['0', [0]],
    ['1', [1]],
    ['1.3', [1.3]],
    ['1.33', [1.33]],
    ['1.33', [1.33333]],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(formatDecimal(...input)).toEqual(expected);
  });
});

describe('pluralize', () => {
  const cases: TestCases<typeof pluralize> = [
    ['cars', [0, 'car']],
    ['cars', [2, 'car']],
    ['car', [1, 'car']],
    ['torch', [1, 'torch', 'es']],
    ['torches', [2, 'torch', 'es']],
  ];

  test.each(cases)('case %#', (expected, input) => {
    expect(pluralize(...input)).toEqual(expected);
  });
});
