import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const S = lines[0].split('')

  for (const [index, val] of S.entries()) {
    if (val !== S[S.length - 1 - index]) {
      console.log('No')
      return
    }
  }

  console.log('Yes')
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
