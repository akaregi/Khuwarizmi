/* eslint-disable @typescript-eslint/no-unused-vars */
import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[1]) {
    return
  }

  let count = 0

  lines[1]
    .split(' ')
    .map(i => parseInt(i))
    .reduce((prev, current, index) => {
      if (index === 0) {
        return current
      }

      if (current > prev) {
        count++
      }

      return current
    }, 1)

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
