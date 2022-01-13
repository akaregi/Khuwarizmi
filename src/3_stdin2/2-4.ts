/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(args: string[]) {
  const [A, B] = args.map(i => parseInt(i))

  if (!A || !B) {
    return
  }

  console.log(A % B === 0 ? 'Yes' : 'No')
}

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
