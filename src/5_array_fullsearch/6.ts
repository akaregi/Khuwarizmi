/* eslint-disable @typescript-eslint/no-unused-vars */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[1]) {
    return
  }

  const max = lines[1]
    .split(' ')
    .map(i => parseInt(i))
    .reduce((prev, current) => Math.max(prev, current), -100)

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
