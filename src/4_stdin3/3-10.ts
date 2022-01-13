import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, ...rest] = lines

  let left = 0
  let right = 0

  for (const i of rest) {
    if (i === 'left') left++
    if (i === 'right') right++
  }

  console.log(left > right ? 'left' : right > left ? 'right' : 'same')
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
