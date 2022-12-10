const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [numberString] = input;

const [number1, number2] = numberString.split(' ').map(Number);

if (number1 < number2) {
  console.log('<');
} else if (number1 > number2) {
  console.log('>');
} else if (number1 === number2) {
  console.log('==');
}
