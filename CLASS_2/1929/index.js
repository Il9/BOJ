const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [MNString] = input;

const [M, N] = MNString.split(' ').map(Number);

let numbers = Array.from({ length: N - 1 }, (_, index) => index + 2);
let target = 0;
let prevNumberLength = numbers.length;

do {
  const primeNumber = numbers[target++];

  prevNumberLength = numbers.length;
  numbers = numbers.filter(number => number === primeNumber || number % primeNumber !== 0);
} while (prevNumberLength !== numbers.length);

console.log(numbers.filter(number => M <= number && number <= N).join('\n'));
