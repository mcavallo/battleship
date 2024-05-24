/// <reference types="@testing-library/jest-dom/types/jest.d.ts" />

/**
 * This is used to fully type cases array for a given function when using
 * test.each, removing the boilerplate and the need for type casting or
 * unknowns.
 *
 * Example:
 * ```
 * const cases: TestCases<typeof functionName> = [
 *   [
 *     false,          <-- function output
 *     ['foo', 'bar']  <-- function arguments as array
 *   ],
 *  ];
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TestCases<T extends (...args: any) => any> = [ReturnType<T>, Parameters<T>][];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TestCasesExtra<T extends (...args: any) => any, U> = [ReturnType<T>, Parameters<T>, U][];

namespace jest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type TestCases<T extends (...args: any) => any, U> = [ReturnType<T>, Parameters<T>, U][];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type TestCasesExtra<T extends (...args: any) => any, U> = [ReturnType<T>, Parameters<T>, U][];
}
