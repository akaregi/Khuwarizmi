import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1] || !lines[2]) {
    return
  }

  const [N, M, K] = lines[0].split(' ').map(Number)
  const A = lines[1].split(' ').map(Number)
  const B = lines[2].split(' ').map(Number)

  if (!N || !M || !K) {
    return
  }

  let count = 0

  for (const [i, Ai] of A.entries()) {
    if (i > N - 1) {
      continue
    }

    for (const [j, Bj] of B.entries()) {
      if (j > M - 1) {
        continue
      }

      if (Ai + Bj === K) {
        count++
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
