import { createInterface } from 'readline'

function main(lines: string[]) {
  const [N, ...S] = lines

  if (!N || !S) {
    return
  }

  console.log(S.filter(isPalindromicString).length)
}

/**
 * Checks if `n` is a palindromic string
 * @param n string
 * @returns true if `n` is palindromic, false otherwise
 */
export function isPalindromicString(s: string): boolean {
  return s === s.split('').reverse().join('')
}

// boilerplate logic below here

const lines: string[] = []

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.on('line', line => lines.push(line))

readline.on('close', () => {
  main(lines)
})
