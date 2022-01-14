/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const [A, B] = lines[0].split(' ').map(Number)

  if (!A || !B) {
    return
  }

  console.log(gcd(A, B))
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a
  }

  return gcd(b, a % b)
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
