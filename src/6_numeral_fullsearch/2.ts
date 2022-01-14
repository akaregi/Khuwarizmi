/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const N = parseInt(lines[0])
  const table = [...Array(N).keys()].map(i => i + 1)

  const count = table.filter(i => N % i === 0).length

  console.log(count)
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
