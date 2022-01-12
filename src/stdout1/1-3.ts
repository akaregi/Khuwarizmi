const dividend = 27182;
const divisor = 818;

let remainder = dividend;

while (remainder > divisor) {
  remainder -= divisor;
}

console.log(remainder);
