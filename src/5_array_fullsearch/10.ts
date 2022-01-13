/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[1]) {
    return
  }

  const A = lines[1].split(' ').map(i => parseInt(i))
  const table = [...new Array(9).keys()].fill(0)

  for (const i of A) {
    table[i - 1] = table[i - 1]! + 1
  }

  const max = table.reduce((prev, current, index) => {
    return current >= table[prev]! ? index : prev
  }, 0)

  console.log(max + 1)

  table
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
