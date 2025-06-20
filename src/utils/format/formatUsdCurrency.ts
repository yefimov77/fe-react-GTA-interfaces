export function formatUSD(value: number | string): string {
  const number = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(number)) return '$ 0';

  return (
    '$ ' + number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') // add spaces as thousands separator
  );
}
