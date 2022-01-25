/**
 * Checks if `n` is prime number
 *
 * @param n number
 * @returns true if `n` is prime number, false otherwise
 */
export function isPrime(n: number): boolean {
  if (n < 2) {
    return false
  }

  const table = [...Array(n).keys()].map(i => i + 1)

  for (const t of table) {
    if (n === t) {
      return true
    }

    if (t === 1) {
      continue
    }

    if (n % t === 0) {
      return false
    }
  }

  // NOTE: can't be reached
  return false
}
