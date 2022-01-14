import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const S = lines[0].split('')

  let count = 0

  S.reduce((prev, current) => {
    if (prev === current) {
      count++
    }

    return current
  })

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
