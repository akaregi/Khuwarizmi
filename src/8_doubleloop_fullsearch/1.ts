import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1]) {
    return
  }

  const A = lines[1].split(' ').map(Number)

  console.log(A.filter(isPrime).length)
}

function isPrime(n: number): boolean {
  if (n < 2) {
    return false
  }

  const table = [...Array(n).keys()].map(i => i + 1)

  for (const t of table) {
    if (n === t) {
      return true
    }

    if (t === 1) {
      continue
    }

    if (n % t === 0) {
      return false
    }
  }

  // NOTE: can't be reached
  return false
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
