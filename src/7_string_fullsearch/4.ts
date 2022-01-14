import { createInterface } from 'readline'

function main(lines: string[]) {
  if (!lines[0] || !lines[1] || !lines[2]) {
    return
  }

  const S = lines[1].split('')
  const T = lines[2].split('')

  if (S.length !== T.length) {
    return
  }

  let count = 0

  for (const [index, val] of S.entries()) {
    if (val !== T[index]) {
      count++
    }
  }

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
