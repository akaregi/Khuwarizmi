import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1]) {
    return
  }

  const [S, N] = lines

  console.log(S[(N as unknown as number) - 1])
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

// function isString(obj: unknown): obj is string {
//   return typeof obj === 'string'
// }
//
// function isNumber(obj: unknown): obj is number {
//   return typeof obj === 'number'
// }
//
// function isTypeOf<T>(obj: unknown, type: T): obj is T {
//   return typeof obj === typeof type
// }
