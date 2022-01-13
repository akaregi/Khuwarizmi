const n = 846259713

console.log(getOnesPlace(n)) // -> 3
console.log(getTensPlace(n)) // -> 1

/**
 * Gets the ones place from the given number
 * @param n number
 * @returns The ones place of `n`
 */
function getOnesPlace(n: number) {
  return n % 10
}

/**
 * Gets the tens place from the given number
 * @param n number
 * @returns The tens place of `n`
 */
function getTensPlace(n: number) {
  return ((n % 100) - (n % 10)) / 10
}
