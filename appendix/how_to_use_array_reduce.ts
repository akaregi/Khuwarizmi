type Operator = 'sum' | 'product' | 'max' | 'min'

function compute(sequence: number[], operator: Operator) {
  switch (operator) {
    case 'sum':
      return sequence.reduce((a, b) => a + b)
      break

    case 'product':
      return sequence.reduce((a, b) => a * b)
      break

    case 'max':
      return sequence.reduce((a, b) => Math.max(a, b))
      break

    case 'min':
      return sequence.reduce((a, b) => Math.min(a, b))
      break
  }
}

const seq = [5, 8, 2, 8, -3, 1, 7, 9, 6, 12, 7, 4, 3, 5, -1]

console.log(compute(seq, 'sum'))
console.log(compute(seq, 'product'))
console.log(compute(seq, 'max'))
console.log(compute(seq, 'min'))
