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

  for (const t of table) {
    console.log(t)
  }
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
