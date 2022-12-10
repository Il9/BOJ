const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [lengthString, numbersString] = input;

const length = Number(lengthString);
const numbers = numbersString.split(' ').map(Number);

const max = Math.max(...numbers);

let primeNumbers = Array.from(new Array(max - 1)).map((n, i) => i + 2);
let i = 0;

while (primeNumbers.length > i + 1) {
  const current = primeNumbers[i++];

  primeNumbers = primeNumbers.filter(n => n % current || n === current);
}

console.log(numbers.filter(n => primeNumbers.includes(n)).length);
