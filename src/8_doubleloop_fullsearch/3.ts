import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const [L, R] = lines[0].split(' ').map(Number)

  if (!L || !R) {
    return
  }

  const table = [...Array(R).keys()].map(i => i + 1).filter(i => i >= L)

  console.log(table.filter(isPalindromic).length)
}

function isPalindromic(n: number): boolean {
  return `${n}` === `${n}`.split('').reverse().join('')
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
