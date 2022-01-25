import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1] || !lines[2] || !lines[3]) {
    return
  }

  const [X, Y, Z] = lines[0].split(' ').map(Number)

  if (!X || !Y || !Z) {
    return
  }

  const A = lines[1]
    .split(' ')
    .map(Number)
    .filter((_, index) => index <= X - 1)

  const B = lines[2]
    .split(' ')
    .map(Number)
    .filter((_, index) => index <= Y - 1)

  const C = lines[3]
    .split(' ')
    .map(Number)
    .filter((_, index) => index <= Z - 1)

  let count = 0

  for (const i of A) {
    for (const j of B) {
      for (const k of C) {
        if (i + j === k) {
          count++
        }
      }
    }
  }

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
