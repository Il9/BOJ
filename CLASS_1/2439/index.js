const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

const [number1] = numberString.split(' ').map(Number);

for (let i = 1; i <= number1; i++) {
  console.log(`${' '.repeat(number1 - i)}${'*'.repeat(i)}`);
}
