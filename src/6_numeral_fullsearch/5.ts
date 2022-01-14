/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createInterface } from 'readline'

type Maybe<T> = T | ''

type Fizz = 'Fizz'
type Buzz = 'Buzz'
type FizzBuzz<T extends Fizz | Buzz> = Maybe<T>
type FizzBuzzPattern = Fizz | Buzz | `${Fizz}${Buzz}` | number

function processFizz(p: number): FizzBuzz<Fizz> {
  return p % 3 === 0 ? 'Fizz' : ''
}

function processBuzz(p: number): FizzBuzz<Buzz> {
  return p % 5 === 0 ? 'Buzz' : ''
}

function processFizzBuzz(p: number): FizzBuzzPattern {
  return (processFizz(p) + processBuzz(p) || p) as FizzBuzzPattern
}

function main(lines: string[]) {
  if (!lines[0]) {
    return
  }

  const N = parseInt(lines[0])
  const table = [...Array(N).keys()].map(i => i + 1)

  for (const t of table) {
    console.log(processFizzBuzz(t))
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
