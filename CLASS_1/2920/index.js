const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const [numberString] = input;

if (numberString === '1 2 3 4 5 6 7 8') {
  console.log('ascending');
} else if (numberString === '8 7 6 5 4 3 2 1') {
  console.log('descending');
} else {
  console.log('mixed');
}
