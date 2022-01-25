/**
 * Counts the numbers of divisors of `n`
 * @param n number
 * @returns Numbers of divisors
 */
export function divisors(n: number): number {
  const table = [...Array(n).keys()].map(i => i + 1)

  return table.filter(i => n % i === 0).length
}
