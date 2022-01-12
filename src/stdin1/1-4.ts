import { createInterface } from 'readline'

const lines: string[] = []

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.on('line', line => lines.push(line))

readline.on('close', () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const S = lines[0]!

  console.log(S[2])
})
