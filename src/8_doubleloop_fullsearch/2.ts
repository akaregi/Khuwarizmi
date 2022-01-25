import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const [N, K] = lines[0].split(' ').map(Number)

  if (!N || !K) {
    return
  }

  const table = [...Array(N).keys()].map(i => i + 1)

  console.log(table.filter(i => divisors(i) === K).length)
}

function divisors(n: number): number {
  const table = [...Array(n).keys()].map(i => i + 1)

  return table.filter(i => n % i === 0).length
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
