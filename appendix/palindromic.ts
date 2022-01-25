/**
 * Checks if `n` is a palindromic number
 * @param n number
 * @returns true if `n` is palindromic, false otherwise
 */
export function isPalindromicNumber(n: number): boolean {
  return `${n}` === `${n}`.split('').reverse().join('')
}

/**
 * Checks if `n` is a palindromic string
 * @param n string
 * @returns true if `n` is palindromic, false otherwise
 */
export function isPalindromicString(s: string): boolean {
  return s === s.split('').reverse().join('')
}
