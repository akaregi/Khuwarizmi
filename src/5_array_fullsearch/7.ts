/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[1]) {
    return
  }

  const A = lines[1].split(' ').map(i => parseInt(i))

  const max = A.reduce((prev, current, index) => {
    return Math.max(A[prev]!, current) === current ? index : prev
  }, 0)

  console.log(max)
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
