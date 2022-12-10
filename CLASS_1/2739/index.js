const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [numberString] = input;

const [number] = numberString.split(' ').map(Number);

for (let i = 1; i <= 9; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
