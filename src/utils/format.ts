export function formatDecimal(value: number) {
  return value.toFixed(2).replace(/\.?0+$/, '');
}

export function pluralize(count: number, noun: string, suffix = 's') {
  return `${noun}${count !== 1 ? suffix : ''}`;
}
