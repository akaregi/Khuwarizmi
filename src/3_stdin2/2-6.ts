/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(args: string[]) {
  const ints = args.map(i => parseInt(i))

  const [A, B, C, D] = ints

  if (!A || !B || !C || !D) {
    return
  }

  console.log(Math.max(A, B, C, D))
}

// boilerplate logic below here

const lines: string[] = []

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.on('line', line => lines.push(line))

readline.on('close', () => {
  const line = lines[0]!
  const args = line.split(' ')

  main(args)
})
