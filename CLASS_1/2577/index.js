const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [number1, number2, number3] = input.map(Number);

const number = number1 * number2 * number3;

for (let i = 0; i <= 9; i++) {
  console.log((number.toString().match(new RegExp(i, 'g')) ?? []).length);
}
