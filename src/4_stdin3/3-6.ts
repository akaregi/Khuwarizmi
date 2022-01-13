import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[1]) {
    return
  }

  const A = lines[1].split(' ').map(i => parseInt(i))

  const sum = A.reduce((prev, current) => prev + current, 0)

  console.log(Math.trunc(sum / A.length))
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
