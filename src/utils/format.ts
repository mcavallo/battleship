/**
 * Formats a decimal number keeping only 2 decimals and removes decimals from integers.
 */
export function formatDecimal(value: number) {
  return value.toFixed(2).replace(/\.?0+$/, '');
}

/**
 * Pluralizes a string based on a count.
 */
export function pluralize(count: number, noun: string, suffix = 's') {
  return `${noun}${count !== 1 ? suffix : ''}`;
}
