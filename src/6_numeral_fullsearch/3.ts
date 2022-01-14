/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const N = parseInt(lines[0])

  if (N === 1) {
    console.log('No')
    return
  }

  const table = [...Array(N).keys()].map(i => i + 1)

  for (const t of table) {
    if (N === t) {
      console.log('Yes')
      return
    }

    if (t === 1) {
      continue
    }

    if (N % t === 0) {
      console.log('No')
      return
    }
  }
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
