import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1]) {
    return
  }

  const S = lines[0].split('')
  const [N, M] = lines[1].split(' ').map(i => parseInt(i))

  if (!N || !M) {
    return
  }

  const Sn = S[N - 1] as string
  const Sm = S[M - 1] as string

  const S2 = S.map((s, index) => {
    if (index === N - 1) {
      return Sm
    }

    if (index === M - 1) {
      return Sn
    }

    return s
  }).join('')

  console.log(S2)
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
