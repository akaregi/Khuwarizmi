/* eslint-disable @typescript-eslint/no-unused-vars */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1]) {
    return
  }

  const [N, _V] = lines[0].split(' ').map(i => parseInt(i))
  const V = _V as number
  const A = lines[1]
    .split(' ')
    .map(i => parseInt(i))
    .reduce((prev, current, index) => (current === V ? index : prev), -1)

  console.log(A)
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
