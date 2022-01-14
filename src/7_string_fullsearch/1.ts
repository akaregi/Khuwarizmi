import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1]) {
    return
  }

  const S = lines[0]
  const c = lines[1]

  console.log(S.includes(c) ? 'Yes' : 'No')
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
